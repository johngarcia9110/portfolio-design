console.log('loaded');

$('a.about').on('click', function() {

    // call /about
    $.get('/about', function(data) {

        // fadeout content block and empty page content
        $('.off-canvas-wrapper').fadeOut(1000).empty();

        // add data from /about to content and fadein
        $('.off-canvas-wrapper').fadeIn(1000).html(data);
    });
});
