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
    var my_constant = 'PIPE struct treelib Node Tree pygame SERVICE_WIN32 SERVICE_STATE_ALL win32con win32service iter hashlib GENERIC_READ SC_MANAGER_ALL_ACCESS subprocess gtk glib MySQLdb idaapi os False True sys commands argparse gridfs pymongo MongoClient win32com.client win32 easywebadv password username protocol port verify_ssl googletrans Translator psutil __future__ print_function httplib2 io googleapiclient discovery oauth2client client tools Storage MediaFileUpload MediaIoBaseDownload acknowledgeAbuse fileId pageSize fields PyApp Window'
    var my_keyword =  'mixer ord with return import from def while if default for range break in else elif __init__ class super replace int split try except None'
    var my_type = 'path serial threading time stdout args self dict list'
    var my_function = 'run decode iter_unpack pad_to_roundup Struct bytearray pad_to_roundup pack_into init pre_init show create_node to_graphviz OpenSCManager next Open Cells Close EnumServicesStatus ListServices Quit hexdigest sha1 decode_insn ph_get_regnames exists open ArgumentParser add_argument readchar input raw_input start parse_args close read write len sleep exit print geteuid Serial Thread StatusIcon set_from_stock set_from_file format connect get_current_event get_current_event_time getoutput MenuItem ImageMenuItem Menu append Image set_image set_subimage SeparatorMenuItem set_submenu show_all popup system main_quit main cursor execute fetchall commit authenticate GridFS put get_version logout Dispatch CreateItem Add Send ls upload walk translate Process getpit memory_info get authorize Http build files get_media FileIO next_chunk create set_default_size set_title Label add'

    this.regexList = [
      {regex: /#.*/g, css: 'my_preprocessor'},
      {regex: SyntaxHighlighter.regexLib.doubleQuotedString, css:'string'},
      {regex: SyntaxHighlighter.regexLib.singleQuotedString, css:'string'},
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
