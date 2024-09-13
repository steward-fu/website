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

var my_constant = 'net.rim.device.api.ui.UiApplication java.awt.Graphics java.applet.Applet net.rim.device.api.ui.component net.rim.device.api.ui.container net.rim.device.api.ui';
var my_type = 'String Applet Graphics HelloWorld HelloWorldScreen MainScreen LabelField RichTextField System';
var my_keyword = 'extends abstract assert boolean break byte case catch char class onClose exit const continue default do double else enum extends false final finally float for goto if implements import instanceof int interface long native new null package private protected public return short static strictfp super switch synchronized this throw throws true transient try void volatile while';
var my_function = 'paint drawString main enterEventDispatcher pushScreen setTitle add';

    this.regexList = [
      { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },
      { regex: /\/\*([^\*][\s\S]*)?\*\//gm, css: 'comments' },
      { regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm, css: 'preprocessor' },
      { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
      { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
      { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi, css: 'value' },
      { regex: /(?!\@interface\b)\@[\$\w]+\b/g, css: 'color1' },
      { regex: /\@interface\b/g, css: 'color2' },
      { regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
      { regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
      { regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
      { regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
      ];

    this.forHtmlScript({
      left  : /(&lt;|<)%[@!=]?/g, 
      right  : /%(&gt;|>)/g 
    });
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['java'];

  SyntaxHighlighter.brushes.Java = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
