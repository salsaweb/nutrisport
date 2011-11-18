$(document).ready(function() {
	$('ul.links-tabs li.active,div.selector, div.selector span,.price-prod,.item-prod,.btn-ns,.cat-item,#topmenu,.nav-splash ul li a,#slider-baner').each(function() {
		PIE.attach(this);
	});
});
