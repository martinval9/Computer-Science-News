var config={reset:!0,mobile:!0};window.sr=new scrollReveal(config),$(document).ready(function(){$(".go-up-btn").click(()=>{$("body, html").animate({scrollTop:"0px"},300)}),$(window).scroll(()=>{$(this).scrollTop()>0?$(".go-up-btn").slideDown(300):$(".go-up-btn").slideUp(300)})});