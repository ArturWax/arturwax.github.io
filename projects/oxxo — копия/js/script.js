$('.collapse').on('show.bs.collapse', function() {
    $(this).prev().find('.fa').removeClass().addClass('fa collapse-minus');
});
$('.collapse').on('hide.bs.collapse', function() {
    $(this).prev().find('.fa').removeClass().addClass('fa collapse-plus');
});