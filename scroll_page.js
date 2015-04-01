// scroll downward
(function () {
    var start_tick = window.performance.now();
    var previous_tick = start_tick;

    var SCROLL_DISTANCE = 8000;
    var FRAMES_PER_SECOND = 120;
    var SCROLL_DISTANCE_PER_FRAME = (SCROLL_DISTANCE / FRAMES_PER_SECOND);
    var DURATION = 300;

    function scrollAnimation(current_tick) {
        var delta = current_tick - previous_tick;
        var duration = current_tick - start_tick;
        previous_tick = current_tick;

        if (duration < DURATION) {
            if (delta > (1000 / FRAMES_PER_SECOND)) {
                window.scrollBy(0, SCROLL_DISTANCE_PER_FRAME * (1 - Math.pow(duration / DURATION, 1.5)));
            }
            
            window.requestAnimationFrame(scrollAnimation);
        }
    }

    window.requestAnimationFrame(scrollAnimation);
})();

// scroll upward
(function () {
    var start_tick = window.performance.now();
    var previous_tick = start_tick;

    var SCROLL_DISTANCE = 8000;
    var FRAMES_PER_SECOND = 120;
    var SCROLL_DISTANCE_PER_FRAME = (SCROLL_DISTANCE / FRAMES_PER_SECOND);
    var DURATION = 300;

    function scrollAnimation(current_tick) {
        var delta = current_tick - previous_tick;
        var duration = current_tick - start_tick;
        previous_tick = current_tick;

        if (duration < DURATION) {
            if (delta > (1000 / FRAMES_PER_SECOND)) {
                window.scrollBy(0, -1 * SCROLL_DISTANCE_PER_FRAME * (1 - Math.pow(duration / DURATION, 1.5)));
            }
            
            window.requestAnimationFrame(scrollAnimation);
        }
    }

    window.requestAnimationFrame(scrollAnimation);
})();
