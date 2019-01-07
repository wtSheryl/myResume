jQuery(function($) {
	$.renderHTML($("#header-content"), "page/nav", null);
});
$.extend({
	renderHTML: function(ele, url, data) {
		if(data == null) {
			data = {};
		}
		data["lang"] = $.lang;
		var html = new EJS({
			"url": url
		}).render(data);
		$(ele).html(html);
		html = null;
	},
});