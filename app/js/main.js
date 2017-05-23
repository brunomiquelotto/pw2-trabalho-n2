$(document).ready(function() {
    $('.card').click(cardClick);
});

var cardClick = function() {
    $(this).toggleClass('height500');
}