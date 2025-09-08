import os
import sys

for root, dirs, files in os.walk('.'):
    for f in files:
        path = os.path.join(root, f)
        if path.endswith('.htm'):
            f = open(path)
            content = f.readlines()
            f.close()

            f = open(path, 'w')
            for c in content:
                t = c.replace('\r', '').replace('\n', '')
                t = t.replace('<br>', '<br />')
                t = t.replace('class="maxSize">', 'class="maxSize" />')
                t = t.replace('hr size="1"', 'hr size="1" /')
                if t == '<br /><script type="text/javascript" src="../tail.js"></script>':
                    continue

                if t == '<head><script type="text/javascript" src="../page_head.js"></script>':
                    t = '<head><script type="text/javascript" src="../page.js"></script></head>'
                    f.write(t + '\n\n')
                    f.write('<body>' + '\n')
                    f.write('<div id="wrapper">' + '\n')
                    f.write('<div id="content">' + '\n')
                    f.write('<div id="header">' + '\n')
                    f.write('<a href="https://steward-fu.github.io/website/index.htm"><h1><span class="big darkBrown">S</span>teward</h1></a>' + '\n')
                    f.write('<h2><span class="highlight">分享是一種喜悅、更是一種幸福</span></h2>' + '\n')
                    f.write('</div>' + '\n\n')
                    f.write('<div id="page">' + '\n')
                    continue

                f.write(t + '\n')
            f.write('</div>' + '\n\n')
            f.write('</div>' + '\n')
            f.write('</div>' + '\n')
            f.write('</body>' + '\n')
            f.write('</html>' + '\n')
            f.close()
