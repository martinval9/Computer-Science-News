var config = {
    reset:  true,
    mobile: true
}

window.sr = new scrollReveal( config );

$(document).ready(function(){
	$('.go-up-btn').click(() => {
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });

	$(window).scroll(() => {
		if( $(this).scrollTop() > 0 ){
			$('.go-up-btn').slideDown(300);
		} else {
			$('.go-up-btn').slideUp(300);
		}
	});

});