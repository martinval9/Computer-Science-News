document.addEventListener('DOMContentLoaded', () => {
	$(document).ready(function () {
		$('#light_theme').click(() => {
			$('head').html('<title>More News Sites</title><meta charset="UTF-8"><meta name="robots" content="nofollow"><meta name="robots" content="index"><meta name="keywords" content="News, Programming News, Computer Science News"><meta name="description" content="Computer Science News - More News Sites"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"><link rel="stylesheet" href="light_mode.css">')
		})

		$('#dark_theme').click(() => {
			$('head').html('<title>More News Sites</title><meta charset="UTF-8"><meta name="robots" content="nofollow"><meta name="robots" content="index"><meta name="keywords" content="News, Programming News, Computer Science News"><meta name="description" content="Computer Science News - More News Sites"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"><link rel="stylesheet" href="styles.css">')
		})

		$("a[title|='Hosted on free web hosting 000webhost.com. Host your own website for       FREE.']").css("display", "none")
		$("img[alt|='www.000webhost.com']").css("display", "none")
	})
})
