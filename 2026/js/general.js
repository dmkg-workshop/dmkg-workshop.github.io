
/* Global variables */
var currentPageName = extractPageName(document.location.href ? document.location.href
				: document.location);
//console.log("currentPageName: "+currentPageName);


/** Init */
window.onload = function() {
	console.log("RelWeb js general scripts loaded");
	setCurrentPageInMenu();
	setCurrentPageInTitle();

	// Stuff giving problems when debuggin with firefox:
	//chrome://browser/content/devtools/codemirror/codemirror.js:3549
	//Script: chrome://browser/content/devtools/codemirror/codemirror.js:494
	
}




/**
 * Extract the string between the last / and the next dot.
 */
function extractPageName(hrefString) {
	var arr = hrefString.split('/');
	var name = arr[arr.length - 1].split('.')[0];
	// console.log("hrefString:"+hrefString);
	// console.log("extractPageName:"+((arr.length<2) ? hrefString :
	// arr[arr.length-2].toLowerCase() + arr[arr.length-1].toLowerCase()));
	// return (arr.length<2) ? hrefString : arr[arr.length-2].toLowerCase() +
	// arr[arr.length-1].toLowerCase();
	// console.log("extractPageName:"+name);
	return name;
}

/**
 * 
 */
function setCurrentPageInTitle() {
	var pageName = extractPageName(document.location.href ? document.location.href
			: document.location);
	if (pageName === "faq") {
		pageName = "FAQ";
	}
	if (!(pageName.length==0)) {
		document.title = "RelWeb - " + capitalizeFirstLetter(pageName);
	}
}

/**
 * 
 */
function setCurrentPageInMenu() {
	currentLocation = document.location.href ? document.location.href
			: document.location;
	//console.log("currentLocation: " + currentLocation);
	if (document.getElementById("nav_links") != null) {
		var menuElements = document.getElementById("nav_links")
				.getElementsByTagName("a");
		setActiveMenu(menuElements, extractPageName(currentLocation));
	}

}

/**
 * Marks as class=current the link to the current page AUX
 * 
 * @param arr
 *            an array of "a" HTML nodes
 * @param currentLocation
 */
function setActiveMenu(arr, currentLocation) {
	for (var i = 0; i < arr.length; i++) {
		//console.log("arr[i]:" + arr[i].href);
		if (extractPageName(arr[i].href) == currentLocation) {
			//if (arr[i].parentNode.tagName != "DIV") {
				//console.log("match");
				// console.log("currentLocation:"+currentLocation);
				// console.log("arr[i]:"+arr[i]);

				// arr[i].textContent = "helloword";
				arr[i].className = "current";
				
				var parentLi = arr[i].parentNode.parentNode.parentNode;
				//console.log(parentLi.nodeName);
				if (parentLi.nodeName.toLowerCase() == "li") {
					//console.log("parent match");
					//console.log(parentLi.nodeName);
					parentLi.className = "current";
				}
			//}
		}
	}
}





/** 
 * Trick for having the sticky nav_bar 
 * */
$(document).ready(function() {
	$(window).scroll(function() {
		// Keep this as lightweight as possible!
		
		headerHeight = 150;
		
		// Pages where we do not want the trick:
		if (currentPageName=="demo"||currentPageName=="quilt") {
			return;
		}
		
		// if you hard code, then use console
		// .log to determine when you want the
		// nav bar to stick.
		// console.log($(window).scrollTop())
		if ($(window).scrollTop() > headerHeight) {
			$('#nav_bar').addClass('nav_bar_fixed');
			// We add the height of the nav bar (40 height without the margin
			// bottom!) to the original margin (10px)
			$("#header").css("margin-bottom", "80px");
		}
		if ($(window).scrollTop() <= headerHeight) {
			$('#nav_bar').removeClass('nav_bar_fixed');
			// Back to original margin
			$("#header").css("margin-bottom", "0px");
		}
	});
});
