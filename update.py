import os
import sys

def patch_html(path):
    if path.endswith('.htm') == False:
        return

    f = open(path, encoding='utf-8-sig')
    content = f.readlines()
    f.close()

    f = open(path, 'w', encoding='utf-8-sig')

    i = 0
    start_write = False
    while i < len(content[:-10]):
        t = content[i].replace('\r', '').replace('\n', '')
        i = i + 1

        if t == '<div id="page">':
            f.write('<!--' + '\n');
            f.write(' ____________________________________________________________' + '\n');
            f.write('|                                                            |' + '\n');
            f.write('|    DESIGN + Pat Heard { http://fullahead.org }             |' + '\n');
            f.write('|      DATE + 2006.09.12                                     |' + '\n');
            f.write('| COPYRIGHT + Free use if this notice is kept in place.      |' + '\n');
            f.write('|____________________________________________________________|' + '\n');
            f.write('-->' + '\n');
            f.write('\n');
            f.write('<head>' + '\n');
            f.write('<title>司徒的教學網站</title>' + '\n');
            f.write('<meta http-equiv="content-type" content="text/html; charset=UTF-8" />' + '\n');
            f.write('<meta http-equiv="content-type" content="application/xhtml+xml; charset=UTF-8" />' + '\n');
            f.write('<meta name="author" content="fullahead.org" />' + '\n');
            f.write('<meta name="keywords" content="XHTML, CSS, template, FullAhead" />' + '\n');
            f.write('<meta name="description" content="A valid, XHTML 1.0 template" />' + '\n');
            f.write('<meta name="robots" content="index, follow, noarchive" />' + '\n');
            f.write('<meta name="googlebot" content="noarchive" />' + '\n');
            f.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.1, maximum-scale=10.0" />' + '\n');
            f.write('\n');
            f.write('<link rel="shortcut icon" href="../website.ico" />' + '\n');
            f.write('<link rel="stylesheet" type="text/css" href="../styles/shCore.css" />' + '\n');
            f.write('<link rel="stylesheet" type="text/css" href="../styles/shThemeDefault.css" />' + '\n');
            f.write('<link rel="stylesheet" type="text/css" href="../css/html.css" media="screen" />' + '\n');
            f.write('<link rel="stylesheet" type="text/css" href="../css/layout.css" media="screen" />' + '\n');
            f.write('\n');
            f.write('<script type="text/javascript" src="../scripts/shCore.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushAppleScript.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushAS3.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushAsm.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushBash.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushColdFusion.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushCpp.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushD.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushCSharp.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushCss.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushDiff.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushErlang.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushGolang.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushGroovy.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushInf.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushJavaFX.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushJava.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushJScript.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushPas.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushPerl.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushPhp.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushPlain.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushPowerShell.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushPython.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushRuby.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushRust.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushSass.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushScad.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushBasic.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushVerilog.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushScala.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushSql.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushXml.js"></script>' + '\n');
            f.write('<script type="text/javascript" src="../scripts/shBrushFortran.js"></script>' + '\n');
            f.write('\n');
            f.write('<script type="text/javascript">SyntaxHighlighter.all();</script>' + '\n');
            f.write('</head>' + '\n');
            f.write('\n');
            f.write('<body>' + '\n');
            f.write('<div id="wrapper">' + '\n');
            f.write('<div id="content">' + '\n');
            f.write('\n');
            f.write('<div id="header">' + '\n');
            f.write('<a href="https://steward-fu.github.io/website/index.htm"><h1><span class="big darkBrown">S</span>teward</h1></a>' + '\n');
            f.write('<h2><span class="highlight">分享是一種喜悅、更是一種幸福</span></h2>' + '\n');
            f.write('</div>\n');
            f.write('\n');
            f.write('<div id="page">' + '\n');
            f.write('\n');

            start_write = True
            continue

        if start_write == True:
            # <h3>PicoSystem</h3>
            # <p><b>拆機</b></p>
            if t.startswith('<h3>'):
                ntype = t.replace('<h3>', '').replace('</h3>', '')
                ntitle = content[i].replace('<p><b>', '').replace('</b></p>', '').replace('\r', '').replace('\n', '')
                t = '<h3><a href="../index.htm">掌機</a> - {} - <b>{}</b></h3>'.format(ntype, ntitle)
                i = i + 1
            f.write(t + '\n')

    if start_write == True:
        f.write('\n')
        f.write('<br>' + '\n')
        f.write('</div>' + '\n')
        f.write('\n')
        f.write('</div>' + '\n')
        f.write('</div>' + '\n')
        f.write('</body>' + '\n')
        f.write('</html>' + '\n')
        f.close()
        print('success, {}'.format(path))

if len(sys.argv) == 2:
    patch_html(sys.argv[1])
    sys.exit(0)

for root, dirs, files in os.walk('.'):
    for f in files:
        path = os.path.join(root, f)
        patch_html(path)
