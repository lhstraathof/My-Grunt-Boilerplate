$(function() {

	/*---------------------------------------------------- */
	/* Function to test is if mobile, tablet or desktop
	/*---------------------------------------------------- */
	var isMobile = { 
		Android: function() {return navigator.userAgent.match(/Android/i); }, 
		BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
		iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
		Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
		Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
		any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); },
		handheld: function() { if ($(window).innerWidth() < 768) return true; },
		tablet: function() { if ($(window).innerWidth() >= 768 && $(window).innerWidth() < 1200) return true; }
	};

	/*---------------------------------------------------- */
	/* Gives the html tag a class
	/*---------------------------------------------------- */
	if (isMobile.any() && isMobile.handheld()) {
		$('html').addClass('mobile');
	} else if (isMobile.any() && isMobile.tablet()) {
		$('html').addClass('tablet');
	} else {
		$('html').addClass('desktop');
	}

	/*---------------------------------------------------- */
	/* Opens external links in new window
	/*---------------------------------------------------- */
	var hostname = window.location.hostname;
	$('a[href^="http://"],a[href^="https://"]').not('a[href^="http://'+ hostname +'"],a[href^="https://'+ hostname +'"]').attr('target','_blank');

	/*-----------------------------------------------------*/
	/* Open all pdf links in new window
	/*-----------------------------------------------------*/
	$('a[href$=".pdf"]').attr('target', '_blank');

	/*-----------------------------------------------------*/
	/* Links with tel: are only clickable on mobile
	/*-----------------------------------------------------*/
	$('html:not(.mobile) a[href^="tel:"]').removeAttr('href');

});