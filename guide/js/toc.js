// These functions control the toggling of the iframe containing the TOC while
// remembering its scroll position. Based on the offline version of Dashcode User
// Guide v3.0 (http://developer.apple.com/) and code from Ciarán O'Kelly
// (http://www.crondesign.com/projects/downloads/scrollfix.js)
// 20110804 T Ferreira 

function initialize_page() { // dynamically load TOC
    "use strict";
    var tocElt = document.createElement("div");
    tocElt.id = "tocMenu";
    tocElt.innerHTML = '<iframe id="tocframe" name="tocframe" src="toc.html" width="200" height="100%" align="left" frameborder="0">This document set is best viewed in a browser that supports iFrames.</iframe>';
    document.body.appendChild(tocElt);
    if (readCookie('IJguideTOCshow') === 'hide') { // determine TOC cookie state and set TOC appropriately
        showHideTOC('hide');
    }
}

var state = 'block', margin = 200;
function showHideTOC(forceState) { // Toggles TOC and the chosen show/hide text label
    "use strict";
    var tocDiv = getStyleObject("tocMenu"),
        bodyDiv = getStyleObject("bodyText"),
        tocToggle = document.getElementById("showHideTOC"),
        anchor = tocToggle.getElementsByTagName('span').item(1),
        showText = tocToggle.getElementsByTagName('img').item(0).getAttribute('showText'),
        hideText = tocToggle.getElementsByTagName('img').item(0).getAttribute('hideText');
    if (state === 'block' || forceState === 'hide') { //hide
        state = 'none';
        margin = 0;
        anchor.innerHTML = showText;
        createCookie('IJguideTOCshow', 'hide', 365);
    } else { //show
        state = 'block';
        margin = 200;
        anchor.innerHTML = hideText;
        createCookie('IJguideTOCshow', 'show', 365);
        //force reload iframe: document.getElementById('tocframe').contentWindow.location.reload();
    }
    tocDiv.display = state;
    if (document.layers) {
        bodyDiv.marginLeft = margin;
    } else {
        bodyDiv.marginLeft = margin + "px";
    }
    return false;
}

function getStyleObject(objectId) { // cross-browser function to get an object's style object given its id
    "use strict";
    if (document.getElementById && document.getElementById(objectId)) { // W3C DOM
        return document.getElementById(objectId).style;
    } else if (document.all && document.all(objectId)) { // MSIE 4 DOM
        return document.all(objectId).style;
    } else if (document.layers && document.layers[objectId]) { // NN 4 DOM note: won't find nested layers
        return document.layers[objectId];
    } else {
        return false;
    }
}

function getScrollY() { // Memorize TOC scroll position: www.crondesign.com/projects/downloads/scrollfix.js
    "use strict";
    var y = 0;
    if (typeof(window.pageYOffset) === 'number') { // Netscape
        y = window.pageYOffset;
    } else if (document.body && (document.body.scrollTop)) { // DOM
        y = document.body.scrollTop;
    } else if (document.documentElement && document.documentElement.scrollTop) { // IE6 standards compliant mode
        y = document.documentElement.scrollTop;
    }
    return y;
}

function loadP(pageref) {
    var y = readCookie(pageref);
    window.scrollTo(0, y);
}

function unloadP(pageref) {
    var y = getScrollY(); // or create cookie only if (y !== 0)
    createCookie(pageref, y, 365);
}

// handling of cookies
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var i, c, nameEQ = name + "=",
        ca = document.cookie.split(';');
    for (i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) === ' ') { c = c.substring(1, c.length); }
        if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length); }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}