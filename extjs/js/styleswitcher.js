/*!
 * Ext JS Library 3.3.1
 * Copyright(c) 2006-2010 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */
function setActiveStyleSheet(title) {
    var i,
        a,
        links = document.getElementsByTagName("link"),
        len = links.length;
    for (i = 0; i < len; i++) {
        a = links[i];
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if (a.getAttribute("title") == title) a.disabled = false;
        }
    }
}

function getActiveStyleSheet() {
    var i,
        a,
        links = document.getElementsByTagName("link"),
        len = links.length;
    for (i = 0; i < len; i++) {
        a = links[i];
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) {
            return a.getAttribute("title");
        }
    }
    return null;
}

function getPreferredStyleSheet() {
    var i,
        a,
        links = document.getElementsByTagName("link"),
        len = links.length;
    for (i = 0; i < len; i++) {
        a = links[i];
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) {
            return a.getAttribute("title");
        }
    }
    return null;
}


window.onload = function (e) {
  setActiveStyleSheet("win7");
}


