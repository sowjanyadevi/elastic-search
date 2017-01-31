$(document).ready(function(){


var searchIcons = $('.js-search-minimal-icon');

		searchIcons.each(function () {
			var btn = $(this);
			var scope = btn.closest('.js-search-minimal');
			var input = scope.find('.js-search-minimal-input');

			btn.click(function () {
				if(!input.is(':visible')){
					input.fadeIn('fast');
					$('input', input).focus();
				}else{
					input.fadeOut('fast');
				}
			});
		});

		})