document.addEventListener('DOMContentLoaded', () => {
	$(document).ready(() => {
		$('.go-up-btn').click(() => {
			$('body, html').animate({
				scrollTop: '0px'
			}, 300);
		});

		$(window).scroll(() => {
			if ($(this).scrollTop() > 0) {
				$('.go-up-btn').slideDown(300);
				$('.bg-light').css({
					'padding': '12px',
					'transition': '0.2s',
					'opacity': 0.95
				})
			} else {
				$('.go-up-btn').slideUp(300);
				$('.bg-light').css({
					'padding': '7px',
					'transition': '0.2s',
					'opacity': 1
				})
			}
		});

		let config = {
			reset: true,
			mobile: true
		}

		window.sr = new scrollReveal(config);

		$('#light_theme').click(() => {
			$('head').html('<title>Computer Science News</title><meta charset="UTF-8"><meta name="robots" content="nofollow"><meta name="robots" content="index"><meta name="keywords" content="News, Programming News, Computer Science News"><meta name="description" content="Computer Science News"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="shortcut icon" href="img/favicon.png" type="image/x-icon"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"><link rel="stylesheet" href="styles/light_mode.css">')
		})

		$('#dark_theme').click(() => {
			$('head').html('<title>Computer Science News</title><meta charset="UTF-8"><meta name="robots" content="nofollow"><meta name="robots" content="index"><meta name="keywords" content="News, Programming News, Computer Science News"><meta name="description" content="Computer Science News"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="shortcut icon" href="img/favicon.png" type="image/x-icon"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"><link rel="stylesheet" href="styles/index.css">')
		})

	})
})
