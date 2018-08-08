$(document).ready(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() > 300) {
            $('#top').fadeIn();
        }else{
            $('#top').fadeOut();
        }
    })
    $('#top').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        },2000)
    });
});