jQuery(function($) {
  var $bodyEl = $("body"),
    $sidedrawerEl = $("#sidedrawer");

  function showSidedrawer() {
    // show overlay
    var options = {
      onclose: function() {
        $sidedrawerEl.removeClass("active").appendTo(document.body);
      }
    };

    var $overlayEl = $(mui.overlay("on", options));

    // show element
    $sidedrawerEl.appendTo($overlayEl);
    setTimeout(function() {
      $sidedrawerEl.addClass("active");
    }, 20);
  }

  function hideSidedrawer() {
    $bodyEl.toggleClass("hide-sidedrawer");
  }

  $(".js-show-sidedrawer").on("click", showSidedrawer);
  $(".js-hide-sidedrawer").on("click", hideSidedrawer);
});
