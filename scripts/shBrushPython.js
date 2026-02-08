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
var my_constant = 'CLIENT_AUTH SOCK_STREAM AF_INET DB USER PASSWD REMOTE_IP REMOTE_PORT DEF_FILE DEF_PORT tk CENTER ghidra program flatapi FlatProgramAPI ttk pyhidra COLOR_BGR2HSV PIPE struct treelib KeyboardInterrupt Node Tree pygame SERVICE_WIN32 SERVICE_STATE_ALL win32con win32service iter hashlib GENERIC_READ SC_MANAGER_ALL_ACCESS subprocess gtk glib MySQLdb idaapi os False True sys commands argparse gridfs pymongo MongoClient win32com.client win32 easywebadv password username protocol port verify_ssl googletrans Translator psutil __future__ print_function httplib2 io googleapiclient discovery oauth2client client tools Storage MediaFileUpload MediaIoBaseDownload acknowledgeAbuse fileId pageSize fields PyApp Window';
var my_keyword = 'by By null this and continue pass let INSERT INTO VALUES new mixer function ord as with return import from def while if default for range break in else elif __init__ class not super __name__ replace int split is try except None var';
var my_type = '_fetchLog json selenium common window webdriver Gtk gi JSON cv2 operator xor PyQt5 QtWidgets QApplication QMainWindow Uint32Array ArrayBuffer DataView ssl Purpose sqlite3 onMessage Uint8Array const NativeFunction Interceptor rpc exports frida stdin Figure matplotlib FigureCanvasTkAgg figure backends backend_tkagg Treeview http Listbox messagebox server HTTPServer BaseHTTPRequestHandler tkinter event pyhidra statusicon widget button socket requests status_icon_position_menu pandora Exception scapy path serial threading time stdout saveArg retval args self dict list';
var my_function = 'str update readlines join crackNext readInt setTimeout fetch clone execute_script require_version push apply Chrome stringify text then dumps quit repository setWindowTitle callback setup_trackbars namedWindow createTrackbar get_arguments bool upper get_trackbar_values getTrackbarPos imread copy cvtColor error inRange bitwise_and imshow waitKey VideoCapture exec_ SimpleHTTPRequestHandler sendall create_default_context load_cert_chain wrap_socket wrap_socket readByteArray hexdump toString getFloat64 setUint8 onLeave enumerateExports on_message ptr recv get_device_manager add_remote_device post toInt32 onEnter send attach create_script on load enumerate_modules enumerateModules enumerateModules Checkbutton Scrollbar configure current plot add_subplot draw get_tk_widget column heading insert Combobox btn_handler Button pack showinfo create_rectangle create_line create_text create_oval grid create_arc Canvas WebServerHandler send_response do_GET do_POST serve_forever send_header end_headers Tk title geometry mainloop get_sha1 encode print_serial send_file flush getState open_program getCurrentProgram getListing currentProgram firstFunction left_click_event Ether UDP TCP IP wrpcap rdpcap Packet run decode iter_unpack pad_to_roundup Struct bytearray pad_to_roundup pack_into init pre_init show create_node to_graphviz OpenSCManager next Open Cells Close EnumServicesStatus ListServices Quit hexdigest sha1 decode_insn ph_get_regnames exists open ArgumentParser add_argument readchar input raw_input start parse_args close read write len sleep exit print geteuid Serial Thread StatusIcon set_from_stock set_from_file format connect get_current_event get_current_event_time getoutput MenuItem ImageMenuItem Menu append Image set_image set_subimage SeparatorMenuItem set_submenu show_all popup system main_quit main cursor execute fetchall commit authenticate GridFS put get_version logout Dispatch CreateItem Add Send ls upload walk translate Process getpit memory_info get authorize Http build files get_media FileIO next_chunk create set_default_size set_title Label add';

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
SyntaxHighlighter.brushes.Python = Brush;
typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
