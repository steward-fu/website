#!/usr/bin/python
import os
import sys
import commands

#<div id="page">
#<br><br>
#<p>
#<a href="#gw" style="border:none;"><img src="img/photos/gw.jpg" class="floatLeft" style="width:75px;height:75px;border:none;" title="Game & Watch: Super Mario Bros."/></a>
#</p>
#</div>

if len(sys.argv) != 2:
  print 'usage: gen_imgref.py xxx.htm'
  sys.exit()

if os.path.exists(sys.argv[1]) == False:
  print 'invalid html path'
  sys.exit()

full = '/tmp/htm.tmp'
os.system('cat {} | grep \'<h3><img src=\"img/photos\' > {}'.format(sys.argv[1], full))

f = open(full)
c = f.readlines()
f.close()

print '<div id="page">'
print '<br><br>'
print '<p>'
for x in c:
  x = x.replace('\r', '').replace('\n', '').split(' ')
  img = x[1].replace('src=', '').replace('"', '')
  name = img.replace('img/photos/', '').replace('.jpg', '')
  print '  <a href="#{}"><img src="img/photos/{}.jpg" class="floatLeft" style="width:75px;height:75px;border:0px;" title=""/></a>'.format(name, name)
print '</p>'
print '</div>'
