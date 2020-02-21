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
  typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush(){
    var my_constant = 'False True'
    var my_keyword =  'import from def while if default for range break in else elif __init__ class super replace int split try except None'
    var my_type = 'gtk glib commands subprocess argparse path os serial threading time sys stdout args self'
    var my_function = 'exists open ArgumentParser add_argument readchar input raw_input start parse_args close read write len sleep exit print geteuid Serial Thread StatusIcon set_from_stock set_from_file format connect get_current_event get_current_event_time getoutput MenuItem ImageMenuItem Menu append Image set_image set_subimage SeparatorMenuItem set_submenu show_all popup system main_quit main'

    this.regexList = [
      {regex: /#.*/g, css: 'my_preprocessor'},
      {regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
      {regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
      {regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
      {regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
      ];
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['py', 'python'];
  SyntaxHighlighter.brushes.Delphi = Brush;
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
