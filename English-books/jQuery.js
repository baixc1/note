***jQuery***
*A Brief Look
	- DOM Traversal and Manipulation
	- Event Handling
	- Ajax
**Learning Center**
*Chapters*
	- About jQuery
		-How jQuery Works
			-jQuery: The Basics
			-Launching Code on Document Ready
				- window.onload
				- $(document).ready 
			-Complete Example
			-Adding and Removing an HTML Class
				-$ele.addClass()
				-$ele.removeClass()
			-Special Effects
				-$ele.hide()
		-Callbacks and Functions		//executed at a later time - async
			-Callback without Arguments
				-$.get('',callback)
			-Callback with Arguments		//the anonymous function wrap callback
		-Additional jQuery Support
	- Using jQuery Core
		-$ vs $()		
			-$() 	//$.fn  this
			-$		//utility-type	vary
		-$( document ).ready()
			-window/load		//images or iframes
			-Shorthand 		//$()
		-Avoiding Conflicts with Other Libraries
			-Putting jQuery Into No-Conflict Mode		//$j = jQuery.noConflict()
			-$ as an argument 
			-Including jQuery Before Other Libraries
			-Summary of Ways to Reference the jQuery Function