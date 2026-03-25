
// ==UserScript==
// @name         MD_DOBIEGARKA
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  sieg heil
// @author       PpekKOX
// @match        http*://*.margonem.pl/
// @match        http*://*.margonem.com/
// @exclude      http*://margonem.*/*
// @exclude      http*://www.margonem.*/*
// @exclude      http*://new.margonem.*/*
// @exclude      http*://forum.margonem.*/*
// @exclude      http*://commons.margonem.*/*
// @exclude      http*://dev-commons.margonem.*/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(async () => {
    try {
        const url = "https://ppekkox.github.io/MD_DOBIEGARKA_PUBLIC/main.js?v=" + Date.now();
        console.log(Date.now(), "- Loading script:", url);

        const code = await fetch(url).then(r => r.text());
        eval(code);

        console.log(Date.now(), "Script loaded");
    } catch (err) {
        console.error(Date.now(), "ERROR loading script", err);
    }
})();