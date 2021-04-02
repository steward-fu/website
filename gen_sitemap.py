#!/usr/bin/python
import os
import sys
import commands
from datetime import datetime

f = open('sitemap.xml', 'w')
f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
f.write('<urlset\n')
f.write('      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n')
f.write('      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n')
f.write('      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n')
f.write('            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n')

now = datetime.now().isoformat()
r = commands.getoutput('find . -name "*htm"').split('\n')
for x in r:
  n = '  <loc>https://steward-fu.github.io/website/' + x.replace('./', '') + '</loc>\n'

  f.write('<url>\n')
  f.write(n)
  f.write('  <lastmod>{}</lastmod>\n'.format(now))
  f.write('  <priority>1.00</priority>\n')
  f.write('</url>\n')

f.close()
print 'task done!'
