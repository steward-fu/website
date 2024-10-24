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
;(function() {
 typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush() {
    var my_constant = 'posedge LOCATION';
    var my_keyword =  'module begin end if assign endmodule';
    var my_type = 'reg input output wire parameter';
    var my_function = 'main always initial set_pin_assignment';

    this.regexList = [
      {regex: /^ *#.*/gm, css: 'my_preprocessor'},
      {regex: SyntaxHighlighter.regexLib.doubleQuotedString, css:'string'},
      {regex: SyntaxHighlighter.regexLib.singleQuotedString, css:'string'},
      {regex: SyntaxHighlighter.regexLib.multiLineCComments, css:'my_comment'},
      {regex: SyntaxHighlighter.regexLib.singleLineCComments, css:'my_comment'},
      {regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
      {regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
      {regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
      {regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
    ];
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['verilog'];
  SyntaxHighlighter.brushes.Verilog = Brush;
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
