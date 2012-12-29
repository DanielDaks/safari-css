jQuery(function($) {
  $('.tile').click(function() {
    var active = $('.tile.active');

    active.removeClass('active');

    /* If this is the active tile, then give it a "close" behaviour. */
    if (active[0] !== this) {
      $(this).addClass('active');
    }
  });
});