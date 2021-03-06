//-*- mode: js2-mode; indent-tabs-mode: t; tab-width: 2; -*-

/**
 * @fileoverview
 * An efficient backend for the JQuery template compiler
 * based on http://wiki.jqueryui.com/w/page/37898666/Template
 *
 * @author Mike Samuel <mikesamuel@gmail.com>
 */

/**
 * Name of a method of $ that can be used to merge data objects.
 * This is needed because <code>$.extend({}, { x: undefined })</code>
 * will not contain a property named "x" leading <code>${x}</code>
 * to fail with an undefined property error.
 *
 * @const
 */
var EXT_ALL_METHOD_NAME = "extAll";

/**
 * Like $.extend but copies properties whose values are undefined.
 *
 * @param {Object} target
 * @param {...Object} var_args containers of properties to copy into target.
 * @return {Object} target
 */
$[ EXT_ALL_METHOD_NAME ] = function ( target, var_args ) {
	var args = arguments, i, source, k;
	for ( i = 1; i < args.length; ++i ) {
		for ( k in ( source = args[ i ] ) ) {
			target[ k ] = source[ k ];
		}
	}
	return target;
};

/**
 * Compiles the given template parse tree to a function that implements that
 * produces the result of applying that template to data and options passed
 * as parameters to the function.
 *
 * @param { Array.<string|Array> } parseTree
 * @return { function ( Object.<string, *>=, Object.<string, *>= ): !string }
 *     A function that takes an optional a data object and options object and
 *     produces a string output that is the template output.
 */
function compileToFunction( parseTree ) {
	/**
	 * The compilation uses variable names to prevent re-evaluation of expressions
	 * when de-thunking, and to collect the results of loops.
	 * When loops are nested, multiple variables are needed, so this prefix is
	 * used for all variable names.  If it appears in template code, behavior
	 * is undefined.
	 * @const
	 */
	var TEMP_NAME_PREFIX = "$$tmplVar";
	/**
	 * The level of nesting.  Used with TEMP_NAME_PREFIX to generate a variable
	 * name.
	 * @type !number
	 */
	var nestLevel = 0;
	/**
	 * An array to which pieces of the JavaScript function body are pushed.
	 * @type Array.<string>
	 */
	var javaScriptSource = [
			"var " + TEMP_NAME_PREFIX + "0;"
			// Make the options object available
			+ "$item=$item||{};"
			// Make available on the stack, the enumerable properties of the data
			// object, and the enumerable properties of the options object.
			// Data properties should trump options.
			+ "with($data=$." + EXT_ALL_METHOD_NAME + "("
			// Where EcmaScript 5's Object.create is available, use that to prevent
			// Object.prototype properties from masking globals.
			+ "Object.create?Object.create(null):{},"
			+ "$data||{})){"
			// The below compiles the parse tree to an expression that returns a
			// string.
			+ "return(" ];
	/**
	 * An array of all the loop variable and index names in scope
	 * used to propagate variables in scope through {{tmpl}}.
	 * The variable names are stored as "foo:foo" so that the result can be
	 * joined on "," to produce an object literal to extend with the current
	 * data as in <code>$.extend( {}, $data, { <<inScope.join("")>> } )</code>.
	 * @type Array.<string>
	 */
	var inScope = [];
	// True iff the innermost parenthetical group in javaScriptSource's return
	// statement contains a string expression.  If it does not, then sticking
	// "+ foo" at the end would be interpreted as converting "foo" to a number
	// instead of appending foo to whatever is there.
	var hasValue;

	// Walk each parse tree node and append the translation to javaScriptSource.
	$.each(
			parseTree.slice( 2 ),
			function walk( _, parseTree ) {
				// If there was a value before this one, append them.
				if ( hasValue ) {
					javaScriptSource.push( "+" );
				}
				var match;
				if ( "string" === typeof parseTree ) {  // HTML snippet
					// 'foo' -> "\'foo\'"
					javaScriptSource.push( escapeJsValue( parseTree ) );
				} else {
					var kind = parseTree[ 0 ],
							content = parseTree[ 1 ],
							len = parseTree.length,
							tmpName = TEMP_NAME_PREFIX + nestLevel;
					if ( kind === "=" ) {  // ${...} substitution.
						// Make sure that + is string-wise.
						// Specifically, ${1}${2} should not compile to (1 + 2).
						if ( !hasValue ) {
							javaScriptSource.push( "''+" );
						}
						// ${x} -> (tmp0 = (x), 'function' !== typeof tmp0 ? tmp0 : tmp0())
						// The above is often the same as
						// ${x} -> (x)
						// but the real story is more complicated since we have to
						// de-thunkify the expression; if it is a function, we need to
						// call it.
						// By using the temporary value, we are guaranteed to only
						// evaluate the expression once.  This avoids problems with
						// expressions like (arr[i++]) which might return a function
						// the first time but not the second.
						var wrapperStart = "", wrapperEnd = "";
						content = content.replace(
								/(=>[\w.$\[\]]+)+$/, function ( postDethunk ) {
									postDethunk = postDethunk.split( "=>" );
									wrapperEnd = new Array( postDethunk.length ).join( ")" );
									wrapperStart = postDethunk.reverse().join( "(" );
									return "";
								} );
						// To make it easy for passes to rewrite expressions without
						// preventing thunking we convert syntax like
						// "x=>a=>b" into "a(b(x))"
						javaScriptSource.push(
								"(", tmpName, "=(", content, "),",
								wrapperStart,
								"'function'!==typeof ",
								tmpName, "?", tmpName, ":", tmpName, ".call(null,arguments))",
								wrapperEnd );
					} else if ( kind === "if" ) {  // {{if condition}}...{{/if}}
						// {{if a}}b{{else}}c{{/if}} -> (a ? "b" : "c")
						var pos = 2, elseIndex, i, continues = ( hasValue = TRUTHY );
						for ( ; continues; pos = elseIndex + 1 ) {
							elseIndex = len;
							for ( i = pos; i < elseIndex; ++i ) {
								if ( parseTree[ i ][ 0 ] === "else" ) {
									elseIndex = i;
								}
							}
							var cond = pos < len
									? ( pos === 2 ? parseTree : parseTree[ pos - 1 ] )[ 1 ] : "";
							continues = /\S/.test( cond );
							if ( DEBUG && !continues ) {
								if ( pos === 2 ) {
									throw new Error(
											"{{if}} missing condition:"
											+ renderParseTree( parseTree, {} ) );
								} else if ( elseIndex !== len ) {
									throw new Error(
											"{{else}} without condition must be last:"
											+ renderParseTree( parseTree, {} ) );
								}
							}
							// The below handles several cases (assuming we wouldn't have
							// thrown an exception above if DEBUG were true):
							//   pos === 2 && continues  ; {{if cond}}
							//      => ((cond)?(<code-up-to-else-or-end>)
							//   pos > 2 && continues    ; {{else cond}}
							//      => ):((cond)?(<code-up-to-else-or-end)
							//   pos > 2 && !continues   ; {{else}} implicit or othersise
							//      => ):((<code-up-to-else-or-end)
							javaScriptSource.push(
									hasValue ? "" : "''",
									pos === 2 ? "((" : "):(",
									cond, continues ? ")?(" : "" );
							hasValue = FALSEY;
							$.each( parseTree.slice( pos, elseIndex ), walk );
						}
						javaScriptSource.push( hasValue ? "))" : "''))" );
					// {{each (key, value) obj}}...{{/each}}
					} else if ( kind === "each" ) {
						// {{each (k, v) ["one", "two"]}}<li value=${k + 1}>${v}{{/each}}
						// -> (tmp0 = [],
						//     $.each(["one", "two"],
						//     function (k, v) {
						//       tmp0.push("<li value=" + (k + 1) + ">" + v + "</li>");
						//     }),
						//     tmp0.join(""))
						// The first part of the comma operator creates a buffer.
						// Then $.each is called to properly iterate over the container.
						// Each iteration puts a string onto the array.
						// Then after iteration is complete, the last element of the comma
						// operator joins the array.  That joined array is the result of
						// the compiled each operator.
						match = content.match( EACH_DIRECTIVE_CONTENT );
						if ( DEBUG && !match ) {
							throw new Error( "Malformed {{each}} content: " + content );
						}
						var keyVar = match[ 1 ] || DEFAULT_EACH_KEY_VARIABLE_NAME,
								valueVar = match[ 2 ] || DEFAULT_EACH_VALUE_VARIABLE_NAME;
						var containerExpr = match[ 3 ];
						++nestLevel;
						javaScriptSource.push(
								"(", tmpName, "=[],$.each((", containerExpr,
								"),function(", keyVar, ",", valueVar, "){var ",
								TEMP_NAME_PREFIX, nestLevel, ";", tmpName, ".push(" );
						hasValue = FALSEY;
						inScope.push( keyVar + ":" + keyVar, valueVar + ":" + valueVar );
						$.each( parseTree.slice( 2 ), walk );
						inScope.length -= 2;
						if ( !hasValue ) {
							javaScriptSource.push( "''" );
						}
						javaScriptSource.push( ")}),", tmpName, ".join(''))" );
						--nestLevel;
					} else if ( kind === "tmpl" ) {
						// {{tmpl name}}
						//    -> $.template("name").tmpl(arguments[0], arguments[1])
						// {{tmpl #id}}
						//    -> $.template($("#id")).tmpl(arguments[0], arguments[1])
						// {{tmpl({x: y}) foo}}
						//    -> $.template("foo").tmpl({ x: y }, arguments[1])
						// {{tmpl({x: y}, { z: w }) foo}}
						//    -> $.template("foo").tmpl({ x: y }, { z: w })
						// The above is correct in spirit if not literally.  See below.

						match = content.match( TMPL_DIRECTIVE_CONTENT );
						if ( DEBUG && !match ) {
							throw new Error( "Malformed {{tmpl}} content: " + content );
						}
						// The data and options come separated by a comma.
						// Parsing JavaScript expressions to figure out where a comma
						// separates two things is hard, so we use a trick.
						// We create an array that we can index into.  The comma that
						// separates the data from the options then simply becomes a
						// comma in an array constructor.
						var dataAndOptions = match[ 1 ];
						javaScriptSource.push(
								"(", tmpName, "=",
								dataAndOptions
								// The below uses arguments[0], the data passed to the compiled
								// function if dataAndOptions is ", { a: b }".
								// It also uses arguments[1], the options passed to the
								// compiled function if dataAndOptions has no options:
								// "{ a: b }".
								// Note also that dataAndOptions is evaluated before any
								// template selector is resolved as expected from the ordering
								// of those in the content.
								? "$.extend([],arguments,[" + dataAndOptions + "])"
								// Propagate any loop variables in scope when all data is
								// passed.
								: inScope.length
								? ( "[$." + EXT_ALL_METHOD_NAME
										+ "({},$data,{" + inScope + "}),$item]" )
								// If the content specifies neither data nor options, and
								// no loop vars are in scope, use the arguments without the
								// overhead of a call to $.extend.
								: "arguments",
								",$.template((",
								match[ 2 ],
								")).tmpl(", tmpName, "[0],", tmpName, "[1]))" );

					// {html} and {wrap} are handled by translation to ${...} and ${tmpl}
					// respectively.
					} else {
						if ( DEBUG ) {
							throw new Error(
									"I do not know how to compile "
									+ renderParseTree( parseTree, DEFAULT_BLOCK_DIRECTIVES ) );
						}
					}
				}
				hasValue = TRUTHY;
			} );
	javaScriptSource.push( hasValue ? ")}" : "'')}" );

	if ( DEBUG ) {
		try {
			return Function( "$data", "$item", javaScriptSource.join( "" ) );
		} catch ( ex ) {
			throw new Error( javaScriptSource.join( "" ) );
		}
	} else {
		return Function( "$data", "$item", javaScriptSource.join( "" ) );
	}
}
