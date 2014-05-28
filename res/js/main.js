(function(){
	$('.panel').data('scale', 1);

	$('body').on('mousewheel', function(event) {
		console.log(event.deltaX, event.deltaY, event.deltaFactor);

		updateScale(event.deltaFactor * event.deltaY);
	});

	function updateScale(scale){
		$.each($('.panel'), function(index, val) {
			$(this).data('scale', $(this).data('scale') + 0.1 * scale);
			$(this).animate({transform: 'scale(' + $(this).data('scale') + ',' + $(this).data('scale') + ')'});
		});
	}
})();