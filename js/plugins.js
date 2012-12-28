// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'log', 'error', 'warn',
        'dir',               // print object level view, showing prototype methods
        'time', 'timeEnd',   // console.time('op') ... console.timeEnd('op') => 12ms
        'trace',             // print current stack
        'assert',            // oh plz (takes boolean)
        'group', 'groupEnd', // place logs in a collapsable unit
        'groupCollapsed',    // same as group, but opens as collapsed by default (logs will be hidden)

        'profile', 'profileEnd', // oh sure these methods don't get a good comment

        //lmgtfy.com/?q=console.count
        'count', 'timeStamp', 'markTimeline',

        // identical to console.log (in chrome)
        'info', 'debug', 'dirxml'

        // Not defined in chrome
        'clear', 'exception', 'table'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
