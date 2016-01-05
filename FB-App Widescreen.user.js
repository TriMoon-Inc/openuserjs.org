// -*- Mode: Javascript; tab-width: 3; indent-tabs-mode: tab; c-basic-offset: 2 -*-
/*******************************************************************************
	(C)2014+ TriMoon
	Authors:	TriMoon <https://www.facebook.com/TriMoon>

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/4.0/
*******************************************************************************/
// ==UserScript==
// @name        FB-App Widescreen
// @namespace   https://www.facebook.com/TriMoon
// @version     2016.01.05.b1
// @description Make the apps become fullwide by hiding the right-side adverts bar
// @match       *://apps.facebook.com/*
// @icon        https://secure.gravatar.com/avatar/923250aa26f9030a60ec5a2a22f127fa
// @author      ©TriMoon™
// @grant none
// @run-at document-start
// @copyright   (C)2014+ TriMoon <https://www.facebook.com/TriMoon>
// @license     CC BY-NC-ND 4.0;	http://creativecommons.org/licenses/by-nc-nd/4.0/
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
