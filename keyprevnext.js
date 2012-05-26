/**
Usage:

$(document).ready(function(){
  $.keyprevnext({
    prevSelector: $('.pagination a:fisrt'),
    nextSelector: $('.pagination a:last')
  });
});

**/

(function($) {

	$.opts = {
		donext: false,
		doprev: false,
		defaults: {
			prevSelector: '',
			nextSelector: '',
			//default = f
			prevKey: 102,
			//default = g
			nextKey: 103
		}
	};

	$.keyprevnext = function(settings) {
		var options = $.extend({}, $.opts.defaults, settings );
		$.opts.doprev = ( options.prevSelector != '' );
		$.opts.donext = ( options.nextSelector != '' );
		$(document).keypress(function(e){
			switch(e.which){
				case options.prevKey:
					if($.opts.doprev){ window.location.href = $(options.prevSelector).attr('href'); }
				break;
				case options.nextKey:
					if($.opts.donext){ window.location.href = $(options.nextSelector).attr('href'); }
				break;
			}
		});
		alert('listo');
	}

})(jQuery);
