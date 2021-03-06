$(function() {

	var everPushedSomething = false,
	windowWidth = $( window ).width(),
    $lightbox = $("#lightbox"),
    $close = $(".js-close"),
    $tidy = $(".js-tidy"),
    $lcbc = $(".js-lcbc"),
    $flappy = $(".js-flappy"),
    $hover = $(".hover");


$hover.on("click", function() {
var href = $(this).attr("href");
   $lightbox.width(windowWidth).removeClass("closed").addClass("open");
    setTimeout(function() {
        $lightbox.load(href + " #guts");
        $close.removeClass("is-vishidden");
    }, 500);
    var _link = $(this).attr("href");
	history.pushState(null, null, _link);
    everPushedSomething = true;
    return false;
});

$tidy.on("click", function() {
    $lightbox.addClass("make-tidy");
});

$lcbc.on("click", function() {
    $lightbox.addClass("make-incarceration");
});

$flappy.on("click", function() {
    $lightbox.addClass("make-flappy");
});

$close.on("click", function() {
	window.history.back();
});

    $(window).bind('popstate', function(){
        if (everPushedSomething) {
            $lightbox.empty();
			$lightbox.removeAttr('style');
            $lightbox.removeClass("open").addClass("closed");
            $close.addClass("is-vishidden");

            setTimeout(function() {
                $lightbox.removeClass("make-tidy");
                $lightbox.removeClass("make-incarceration");
                $lightbox.removeClass("make-flappy");
            }, 500);
        }
        everPushedSomething = true;
    });

});