$(document).ready(function() {
$('.book-carousel').slick({
autoplay: true,
arrows: false,
dots: false
});

$('#accordion').accordion();


$('.contact-button').magnificPopup({
type: 'inline',
items: {
  src: '#modal-content'
}
});
});
