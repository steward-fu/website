/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
  // CommonJS
  typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush()
  {
    var my_type = 'console Promise Object';
    var my_constant = 'stdout stderr';
    var my_keyword = 'await async require const break case catch continue default delete do else false for function if in instanceof new null return super switch this throw true try typeof var while with';
    var my_function = 'exec on toString indexOf list log reject start resolve ActiveXObject OpenTextFile WriteLine Close load readFileSync forEach keys';
    var r = SyntaxHighlighter.regexLib;
    this.regexList = [
      { regex: r.multiLineDoubleQuotedString, css: 'string' },
      { regex: r.multiLineSingleQuotedString, css: 'string' },
      { regex: r.singleLineCComments, css: 'comments' },
      { regex: r.multiLineCComments, css: 'comments' },
      { regex: /\s*#.*/gm, css: 'preprocessor' },
      { regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
      { regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
      { regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
      { regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
      ];
  
    this.forHtmlScript(r.scriptScriptTags);
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['js', 'jscript', 'javascript'];

  SyntaxHighlighter.brushes.JScript = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
