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
var my_constant = 'android.opengl.GLES20 android.opengl.GLSurfaceView android.widget.FrameLayout javax.microedition.khronos.egl.EGLConfig javax.microedition.khronos.opengles.GL10 javax.microedition.midlet javax.microedition.lcdui javax.swing net.rim.device.api.ui.UiApplication Hello java.awt.Graphics GL_VENDOR GL_RENDERER GL_VERSION GLES20 java.applet.Applet net.rim.device.api.ui.component net.rim.device.api.ui.container GL_COLOR_BUFFER_BIT net.rim.device.api.ui com.example.hello android.app.Activity android.os.Bundle android.widget.TextView';
var my_type = 'MainActivity Activity org slf4j Bundle TextView Logger JOptionPane org slf4j LoggerFactory MIDlet apache AlertType.INFO Alert maven plugins KieServices runtime GLSurfaceView KieSession Display MyTest KieContainer kie Factory api KieBase org junit Test sample String Applet GL10 EGLConfig Graphics HelloWorld HelloWorldScreen MainScreen LabelField RichTextField System';
var my_keyword = 'extends rule when then end out abstract assert boolean break byte case catch char class onClose exit const continue default do double else enum extends false final finally float for goto if implements import instanceof int interface long native new null package private protected public return short static strictfp super switch synchronized this throw throws true transient try void volatile while';
var my_function = 'loadLibrary stringFromJNI getLogger info paint onCreate showMessageDialog setText setTextSize setContentView drawString main startApp eval println testRules setCurrent setEGLContextClientVersion setTextColor FrameLayout addView setRenderer Renderer onSurfaceCreated pauseApp destroyApp getDisplay get glClear getKieClasspathContainer getKieBase newKieSession glGetString runOnUiThread glClearColor onSurfaceChanged glViewport onDrawFrame fireAllRules dispose enterEventDispatcher pushScreen setTitle add';

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
