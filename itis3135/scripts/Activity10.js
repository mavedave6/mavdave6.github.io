$(document).ready(function() {

    // preload the image for each link
    $('#image_list a').each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr('href');
    });

    // set up the event handlers for each link
    $('#image_list a').click(function(event) {
        var imageURL = $(this).attr('href');
        var imageCaption = $(this).attr('title');

        // get the image URL and caption for each image and animate the caption
        $('#image').fadeOut(500, function() {
            $(this).attr('src', imageURL).fadeIn(500);
        });
        $('#caption').fadeOut(500, function() {
            $(this).text(imageCaption).fadeIn(500);
        });

        // cancel the default action of each link
        event.preventDefault();
    });

    // move the focus to the first link
    $('li:first-child a').focus();
}); // end ready
