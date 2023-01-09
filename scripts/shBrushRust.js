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
    var my_constant = 'MAX';
    var my_keyword =  'pub if use struct else Some while async for fn impl as return in let None mut static';
    var my_type = 'response gen f64 rand Rng routing extract Extension sqlx anyhow Result String sqlite SqlitePool serde actix_web web u64 MyStruct App HttpResponse HttpServer Deserialize int Option Html Box ListNode usize i32 u32 std net SocketAddr Router axum Server str Solution Vec vec';
    var my_function = 'thread_rng pow _pi post_create post_read post_update post_delete to_string get connect query fetch_all sort_list main push pop to post get_index post_test run expect Ok content_type body Form format sort as_mut unwrap len println route handler from bind serve await into_make_service as_ref is_none new sort_array';

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
  Brush.aliases  = ['rust'];
  SyntaxHighlighter.brushes.Cpp = Brush;
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
