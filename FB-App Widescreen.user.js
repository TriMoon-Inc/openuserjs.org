// -*- Mode: Javascript; tab-width: 4; indent-tabs-mode: tab; c-basic-offset: 2 -*-
/*******************************************************************************
	(C)2014+ TriMoon
	Authors:	TriMoon <https://www.facebook.com/TriMoon>

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/4.0/
*******************************************************************************/
// ==UserScript==
// @name			FB-App Widescreen
// @namespace		https://www.facebook.com/TriMoon
// @version			2017.10.23
// @description	Make the apps become fullwide by hiding the right-side adverts bar
// @match			*://apps.facebook.com/*
// @icon			data:image/png;base64,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
// @author			©TriMoon™
// @grant none
// @run-at document-start
// @copyright		(C)2014+ TriMoon <https://www.facebook.com/TriMoon>
// @license			CC BY-NC-ND 4.0;	http://creativecommons.org/licenses/by-nc-nd/4.0/
// ==/UserScript==

"use strict";
(
function (scope){
	function MakeWide (){
		var rightCol;
		rightCol = scope.getElementById("rightCol");
		if( rightCol ) rightCol.style.display="none";
	}

	if( scope.addEventListener ){
		scope.addEventListener("DOMContentLoaded", MakeWide);
	}
}
)( document );
