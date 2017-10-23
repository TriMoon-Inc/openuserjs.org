/*******************************************************************************
 * 	(C)2016+ TriMoon
 * 	Authors:	TriMoon <https://www.facebook.com/TriMoon>
 *
 * 	This work is licensed under a Creative Commons License !
 * 	See: http://creativecommons.org/licenses/by-nc-nd/4.0/
 ******************************************************************************/
// ==UserScript==
// @name		wikEd
// @version		2016.06.14.b2
// @description	A full-featured in-browser editor for Wikipedia and other MediaWikis. See https://en.wikipedia.org/wiki/User:Cacycle/wikEd
// @namespace	https://en.wikipedia.org/wiki/User:TriMoon
// @match		*://*.wikipedia.org/*
// @match		*://*.wikia.com/*
// @match		*://projectgorgon.com/w*
// @icon		https://upload.wikimedia.org/wikipedia/commons/5/52/WikEd_logo39x40_animated.gif
// @grant		none
// @run-at		document-end
// @license		CC BY-NC-ND 4.0;	http://creativecommons.org/licenses/by-nc-nd/4.0/
// @homepageURL	https://en.wikipedia.org/wiki/User:Cacycle/wikEd
// @supportURL	https://en.wikipedia.org/wiki/User_talk:Cacycle/wikEd
// @author		©TriMoon™
// ==/UserScript==

(
function (scope, mw) {
	'use strict';

	function _loadScript() {
		var config = {
						debug: false,
						name: 'wikipedia.wikEd',
						site: '//en.wikipedia.org', // mw.config.get("wgServer")
						wikiScript:	'/w/index.php', // mw.util.wikiScript() / mw.config.get("wgScript")
						article:	{
							page:	'User:Cacycle/wikEd.js',
							type:	'text/javascript'
						}
					},
			scriptURL	= window.location.protocol
						+ config.site + config.wikiScript
						+ '?title=' + config.article.page
						+ '&action=raw&ctype=' + config.article.type;

		// Set debug flag from URL "?debug=true"
		if (/debug=(\w+)/i.test(window.location.search) &&
				/debug=(\w+)/i.exec(window.location.search)[1] == 'true'
		) {
			config.debug =	true;
		}
		if (config.debug){
			mw.log(config.name + ': Start');
			mw.log(config.name + ': Source= ' + scriptURL);
		}
		mw.loader.implement(
			config.name,
			[scriptURL],
			{},
			{},
			{}
		);
		if (config.debug){
			mw.log(config.name + ': State= ' + mw.loader.state(config.name));
			mw.log(config.name + ': Loading');
		}
		mw.loader.load(config.name);
//		mw.loader.load(scriptURL);
		if (config.debug){
			mw.log(config.name + ': State= ' + mw.loader.state(config.name));
			mw.log(config.name + ': End');
		}
	}
	if (scope.addEventListener){
		scope.addEventListener('DOMContentLoaded', _loadScript);
	}
}
)(document, mediaWiki);
