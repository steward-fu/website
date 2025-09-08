document.addEventListener("DOMContentLoaded", function () {
    var comment =
    " ____________________________________________________________ \n" +
    "|                                                            |\n" +
    "| DESIGN + Pat Heard { http://fullahead.org }                |\n" +
    "| DATE + 2006.09.12                                          |\n" +
    "| COPYRIGHT + Free use if this notice is kept in place.      |\n" +
    "|____________________________________________________________|\n";
    document.head.appendChild(document.createComment(comment));

    var title = document.createElement("title");
    title.textContent = "司徒的教學網站";
    document.head.appendChild(title);

    var meta = document.createElement("meta");
    meta.httpEquiv = "content-type";
    meta.content = "text/html; charset=UTF-8";
    document.head.appendChild(meta);

    meta = document.createElement("meta");
    meta.httpLowast = "content-type";
    meta.content = "application/xhtml+xml; charset=UTF-8";
    document.head.appendChild(meta);

    meta = document.createElement("meta");
    meta.name = "author";
    meta.content = "fullahead.org";
    document.head.appendChild(meta);

    meta = document.createElement("meta");
    meta.name = "keywords";
    meta.content = "XHTML, CSS, template, FullAhead";
    document.head.appendChild(meta);

    meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "A valid, XHTML 1.0 template";
    document.head.appendChild(meta);

    meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "index, follow, noarchive";
    document.head.appendChild(meta);

    meta = document.createElement("meta");
    meta.name = "googlebot";
    meta.content = "noarchive";
    document.head.appendChild(meta);

    meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.1, maximum-scale=10.0";
    document.head.appendChild(meta);

    var link = document.createElement("link");
    link.rel = "shortcut icon";
    link.href = "website.ico";
    document.head.appendChild(link);

    link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "styles/shCore.css";
    document.head.appendChild(link);

    link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "styles/shThemeDefault.css";
    document.head.appendChild(link);

    link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "css/html.css";
    link.media = "screen"
    document.head.appendChild(link);

    link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "css/layout.css";
    link.media = "screen"
    document.head.appendChild(link);
});

