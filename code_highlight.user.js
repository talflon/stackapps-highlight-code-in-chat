// ==UserScript==
// @name          Highlight Code in Chat
// @author        Nathan Osman
// @version       1.0
// @namespace     http://quickmediasolutions.com
// @description   Highlights <code> elements contained in chat messages.
// @include       http://chat.stackoverflow.com/rooms/*
// @include       http://chat.stackoverflow.com/transcript/*
// @include       http://chat.meta.stackoverflow.com/rooms/*
// @include       http://chat.meta.stackoverflow.com/transcript/*
// @include       http://chat.stackexchange.com/rooms/*
// @include       http://chat.stackexchange.com/transcript/*
// ==/UserScript==

/* Embed the style rule on the page. */
var style_element = document.createElement('style');
style_element.type = 'text/css';
style_element.textContent =
    '.content > code {' +
    '  background-color: rgba(0, 0, 0, 0.1);' +
    '  border-radius: 3px;' +
    '  padding: 4px;' +
    '}' +
    '.content > pre {' +
    '  border-left: 8px solid rgba(0, 0, 0, 0.1);' +
    '  padding-left: 12px;' +
    '}';
document.getElementsByTagName('head')[0].appendChild(style_element);
