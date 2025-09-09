import os
import sys

MAGIC = '<!-- Steward-Fu -->'

def patch_html(path):
    if path.endswith('.htm') == False:
        return

    f = open(path, encoding='utf-8-sig')
    content = f.readlines()
    f.close()

    chk = content[0].replace('\n', '').replace('\r', '\n')
    if chk == MAGIC:
        print('failure, {}'.format(path))
        return

    f = open(path, 'w', encoding='utf-8-sig')
    f.write(MAGIC + '\n')

    start_write = False
    for c in content:
        t = c.replace('\r', '').replace('\n', '')
        t = t.replace('<br>', '<br />')
        t = t.replace('class="maxSize">', 'class="maxSize" />')
        t = t.replace('<hr size="1">', '<hr size="1" />')
        if t == '<div id="page">':
            f.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">' + '\n');
            f.write('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">' + '\n');
            f.write('<head><script type="text/javascript" src="../page.js"></script></head>' + '\n');
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
            f.write('<h3><a href="../index.htm">掌機</a> - Game Gear Micro - <b>簡要規格</b></h3>' + '\n');

            start_write = True
            continue

        if start_write == True:
            f.write(t + '\n')

    if start_write == True:
        f.write('<br />' + '\n')
        f.write('</div>' + '\n\n')
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
