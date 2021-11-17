function openMenu() {
    var navMain = document.getElementById('navMenuId');
    if (navMain.className === 'navMenu') {
        navMain.className += ' mobileView';
    } else {
        navMain.className = 'navMenu';
    }
}

var config = {
    reset:  true,
    mobile: true
}

window.sr = new scrollReveal( config );

$(document).ready(function(){
	$('.ir-arriba').click(() => {
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });

	$(window).scroll(() => {
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});