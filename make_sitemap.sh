#!/bin/sh
mypath=sitemap.xml
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" > $mypath
echo "  <sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">" >> $mypath
echo "    <sitemap>" >> $mypath
find . -name "*.htm" | awk '{print "      <loc>http://steward-fu.github.io/website"$1"</loc>"}' | sed 's/website./website/g' >> $mypath
echo "    </sitemap>" >> $mypath
echo "  </sitemapindex>" >> $mypath
