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
var my_constant = 'Tk';

var my_type = 'MainWindow';

var my_keyword = 'bless caller continue dbmclose dbmopen die do dump else elsif eval exit for foreach goto if import last local my next no our package redo ref require return sub tie tied unless untie until use wantarray while';

var my_function = 'title new MainLoop abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr chroot close closedir connect cos crypt defined delete each endgrent endhostent endnetent endprotoent endpwent endservent eof exec exists exp fcntl fileno flock fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getppid getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt glob gmtime grep hex index int ioctl join keys kill lc lcfirst length link listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd oct open opendir ord pack pipe pop pos print printf prototype push quotemeta rand read readdir readline readlink readpipe recv rename reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat study substr symlink syscall sysopen sysread sysseek system syswrite tell telldir time times tr truncate uc ucfirst umask undef unlink unpack unshift utime values vec wait waitpid warn write';

this.regexList = [
{regex: new RegExp('#[^!].*$', 'gm'), css: 'comments' },
{regex: new RegExp('^\\s*#!.*$', 'gm'), css: 'preprocessor' },
{regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
{regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
{regex: new RegExp('(\\$|@|%)\\w+', 'g'), css: 'variable' },
{regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
{regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
{regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
{regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
];

this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
}

Brush.prototype = new SyntaxHighlighter.Highlighter();
Brush.aliases = ['perl', 'Perl', 'pl'];
SyntaxHighlighter.brushes.Perl = Brush;
typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
