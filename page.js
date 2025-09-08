document.addEventListener("DOMContentLoaded", function () {
    // Add comment block (optional)
    var commentContent =
    " ____________________________________________________________ \n" +
    "|                                                            |\n" +
    "|    DESIGN + Pat Heard { http://fullahead.org }             |\n" +
    "|      DATE + 2006.09.12                                     |\n" +
    "| COPYRIGHT + Free use if this notice is kept in place.      |\n" +
    "|____________________________________________________________|\n";
    document.head.appendChild(document.createComment(commentContent));

    // Set document title
    document.title = "司徒的教學網站";

    // Add meta tags
    var metaTags = [
      { "http-equiv": "content-type", content: "text/html; charset=UTF-8" },
      { "http-lowast": "content-type", content: "application/xhtml+xml; charset=UTF-8" },
      { name: "author", content: "fullahead.org" },
      { name: "keywords", content: "XHTML, CSS, template, FullAhead" },
      { name: "description", content: "A valid, XHTML 1.0 template" },
      { name: "robots", content: "index, follow, noarchive" },
      { name: "googlebot", content: "noarchive" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.1, maximum-scale=10.0"
      }
    ];

    for (var i = 0; i < metaTags.length; i++) {
      var meta = document.createElement("meta");
      var attrs = metaTags[i];
      for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
          meta.setAttribute(key, attrs[key]);
        }
      }
      document.head.appendChild(meta);
    }

    // Add favicon
    var favicon = document.createElement("link");
    favicon.setAttribute("rel", "shortcut icon");
    favicon.setAttribute("href", "../website.ico");
    document.head.appendChild(favicon);

    // Add stylesheets
    var stylesheets = [
      "../styles/shCore.css",
      "../styles/shThemeDefault.css",
      "../css/html.css",
      "../css/layout.css"
    ];

    for (var j = 0; j < stylesheets.length; j++) {
      var link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", stylesheets[j]);
      link.setAttribute("media", "screen");
      document.head.appendChild(link);
    }

    // Utility function: load script with callback
    function loadScript(src, callback) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.onload = callback;
      document.head.appendChild(script);
    }

    // Load shCore.js first
    loadScript("../scripts/shCore.js", function () {
      // After core is loaded, load brushes
      var brushScripts = [
        "shBrushAppleScript.js", "shBrushAS3.js", "shBrushAsm.js",
        "shBrushBash.js", "shBrushColdFusion.js", "shBrushCpp.js", "shBrushD.js",
        "shBrushCSharp.js", "shBrushCss.js", "shBrushDiff.js", "shBrushErlang.js",
        "shBrushGolang.js", "shBrushGroovy.js", "shBrushInf.js", "shBrushJavaFX.js",
        "shBrushJava.js", "shBrushJScript.js", "shBrushPas.js", "shBrushPerl.js",
        "shBrushPhp.js", "shBrushPlain.js", "shBrushPowerShell.js", "shBrushPython.js",
        "shBrushRuby.js", "shBrushRust.js", "shBrushSass.js", "shBrushScad.js",
        "shBrushBasic.js", "shBrushVerilog.js", "shBrushScala.js", "shBrushSql.js",
        "shBrushXml.js", "shBrushFortran.js"
      ];

      var loadedCount = 0;
      var total = brushScripts.length;

      function onBrushLoaded() {
        loadedCount++;
        if (loadedCount === total) {
          // All brushes loaded, run SyntaxHighlighter
          SyntaxHighlighter.all();
        }
      }

      for (var k = 0; k < total; k++) {
        loadScript("../scripts/" + brushScripts[k], onBrushLoaded);
      }
    });
});

