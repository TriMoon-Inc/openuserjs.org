// -*- Mode: Javascript; tab-width: 3; indent-tabs-mode: tab; c-basic-offset: 2 -*-
// JSHint options
/* jshint -W004, -W100, newcap: false, browser: true, jquery: true, sub: true, bitwise: true, curly: true, evil: true, forin: true, freeze: true, globalstrict: true, immed: true, latedef: true, loopfunc: true, quotmark: single, strict: true, undef: true */
/* global console, mediaWiki */
/*******************************************************************************
	(C)2016+ TriMoon
	Authors:	TriMoon <https://www.facebook.com/TriMoon>

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/4.0/
*******************************************************************************/
// ==UserScript==
// @name		wikEd
// @version		2016.01.05.a2
// @description	A full-featured in-browser editor for Wikipedia and other MediaWikis. See https://en.wikipedia.org/wiki/User:Cacycle/wikEd
// @namespace	https://en.wikipedia.org/wiki/User:TriMoon
// @match		*://*.wikipedia.org/*
// @match		*://*.wikia.com/*
// @icon		https://upload.wikimedia.org/wikipedia/commons/5/52/WikEd_logo39x40_animated.gif
// @grant		none
// @run-at		document-end
// @license		CC BY-NC-ND 4.0;	http://creativecommons.org/licenses/by-nc-nd/4.0/
// @homepageURL	https://en.wikipedia.org/wiki/User:Cacycle/wikEd
// @supportURL	https://en.wikipedia.org/wiki/User_talk:Cacycle/wikEd
// @author		©TriMoon™
// ==/UserScript==

// turn on ECMAScript 5 strict mode
"use strict";

(
function ( mw, $ ){
	function _onDomReady (){
		var config = {
			debug:		false,
			name:		'wikipedia.wikEd',
			site:		'//en.wikipedia.org', // mw.config.get("wgServer")
			wikiScript:	'/w/index.php', // mw.util.wikiScript() / mw.config.get("wgScript")
			article:	{
				page:	'User:Cacycle/wikEd.js',
				type:	'text/javascript'
			}
		};
		// Set debug flag from URL "?debug=1"
		if ((/(?:^\?|&)debug=1(?:&|$)/i).test(window.location.search)) {
			config.debug = true;
		}
		if (config.debug){	mw.log(config.name + ': Start' ); }
		mw.loader.addSource(
			config.name,
			config.site + config.wikiScript
			+ '?title=' + config.article.page
			+ '&action=raw&ctype=' + config.article.type
		);
		if (config.debug){	mw.log(config.name + ': Source= ' + mw.loader.getSource(config.name) ); }
		if (config.debug){	mw.log(config.name + ': Loading' ); }
		mw.loader.load(mw.loader.getSource(config.name));
	/*
		The below doesn't seem to work yet, somehow it doesn't load
		Check: https://www.mediawiki.org/wiki/ResourceLoader/Modules#mw.loader.load

		mw.loader.load(config.name, 'text/javascript');
	*/
		if (config.debug){	mw.log(config.name + ': State= ' + mw.loader.state(config.name) ); }
		if (config.debug){	mw.log(config.name + ': End' ); }
	}
	$(_onDomReady);
}
)( mediaWiki, jQuery );
