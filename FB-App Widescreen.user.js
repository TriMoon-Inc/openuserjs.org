// -*- Mode: Javascript; tab-width: 3; indent-tabs-mode: tab; c-basic-offset: 2 -*-
/*******************************************************************************
	(C)2014+ TriMoon
	Authors:	TriMoon <http://claimid.com/trimoon>

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/4.0/
*******************************************************************************/
// ==UserScript==
// @name       FB-App Widescreen
// @namespace  http://claimid.com/trimoon
// @version    0.1
// @description  Make the apps become fullwide by hiding the right-side adverts bar
// @match      https://apps.facebook.com/*
// @copyright  2014+, TriMoon
// @author ©TriMoon™
// ==/UserScript==

document.getElementById("rightCol").style.display="none";
