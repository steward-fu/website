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
var my_const = 'DOCTYPE';
var my_type = 'WebSocket document console';
var my_keyword = 'doctype var new function html';
var my_function = 'update addEventListener fetch getElementById onclose onopen onmessage log';

function process(match, regexInfo)
{
    var constructor = SyntaxHighlighter.Match,
        code = match[0],
        tag = new XRegExp('(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)', 'xg').exec(code),
        result = []
        ;

    if (match.attributes != null) 
    {
        var attributes,
            regex = new XRegExp('(?<name> [\\w:\\-\\.]+)' +
                                '\\s*=\\s*' +
                                '(?<value> ".*?"|\'.*?\'|\\w+)',
                                'xg');

        while ((attributes = regex.exec(code)) != null) 
        {
            result.push(new constructor(attributes.name, match.index + attributes.index, 'color1'));
            result.push(new constructor(attributes.value, match.index + attributes.index + attributes[0].indexOf(attributes.value), 'string'));
        }
    }

    if (tag != null)
        result.push(
            new constructor(tag.name, match.index + tag[0].indexOf(tag.name), 'keyword')
        );

    return result;
}
    
this.regexList = [
{ regex: new XRegExp('(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)', 'gm'), css: 'color2' },    // <![ ... [ ... ]]>
{ regex: SyntaxHighlighter.regexLib.xmlComments, css: 'comments' },    // <!-- ... -->
{ regex: new XRegExp('(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)', 'sg'), func: process },
{ regex: new RegExp(this.getKeywords(my_const),'gm'), css:'my_const bold'},
{ regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
{ regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
{ regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'}
];
};

Brush.prototype = new SyntaxHighlighter.Highlighter();
Brush.aliases = ['xml', 'xhtml', 'xslt', 'html'];

SyntaxHighlighter.brushes.Xml = Brush;

// CommonJS
typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
