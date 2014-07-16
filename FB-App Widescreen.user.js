// -*- Mode: Javascript; tab-width: 3; indent-tabs-mode: tab; c-basic-offset: 2 -*-
/*******************************************************************************
	(C)2014+ TriMoon
	Authors:	TriMoon <https://www.facebook.com/TriMoon>

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/4.0/
*******************************************************************************/
// ==UserScript==
// @name       FB-App Widescreen
// @namespace  https://www.facebook.com/TriMoon
// @version    0.2
// @description  Make the apps become fullwide by hiding the right-side adverts bar
// @match      https://apps.facebook.com/*
// @icon       https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/t1.0-1/p50x50/1234913_10203099716910993_2128955107_n.jpg
// @author ©TriMoon™
// @grant none
// @run-at document-start
// @copyright  http://creativecommons.org/licenses/by-nc-nd/4.0/
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
