(function() {

/**
 * This is our base install scripts js file - it contains various shims for browser behaviour and a few other helpful methods
 *
 * Various scripts have been borrowed from around the web - sorry if they haven't been attributed - it is mostly due to losing the source at some stage
 *
 * @author: Matthew Daniels, 2013
 */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Polyfills for less quality browsers (read: IE7-8)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For IE8 and earlier versions - a Date.now() method
!Date.now && Date.now = function() { return +new Date(); }

// setup an indexOf method on Array if it does not exist - this will get around any Vendor issues surrounding ECMA standards and non-implementation (*cough* IE *cough*)
if(!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(elt /*, from*/ ) {
		var len = this.length,
			from = Number(arguments[1]) || 0;
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);

		if(from < 0) from += len;

		for(; from < len; from++) {
			if(from in this && this[from] === elt) return from;
		}
		return -1;
	};
}


// Avoid console errors in browsers that lack a console
var method,
	noop = function noop() {},
	methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'],
	length = methods.length,
	console = (window.console = window.console || {});

while(length--) {
    method = methods[length];

    // Only stub undefined methods.
    if(!console[method]) {
        console[method] = noop;
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// requestAnimationFrame PolyFill
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var lastTime = 0,
    vendors = ['ms', 'moz', 'webkit', 'o'],
    x = 0,
    len = vendors.length && !window.requestAnimationFrame;

for(; x < len; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
}

if(!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
        var currTime = Date.now(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
            id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}

if(!window.cancelAnimationFrame) { window.cancelAnimationFrame = function(id) { clearTimeout(id); }; }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// END: Polyfills
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// create a cru namespace - most methods (aside from polyfils) will be in the cru namespace
window.cru = window.cru || {};


/**
 *  A better typeof implementation.<br>
 *  This method will return a proper string for
 *  every object in javascript; including, but not limited to:
 *  'array'
 *  'arguments'
 *  'error'
 *  'date'
 *  'regexp'
 *  'json'
 *  .
 *  .
 *  .
 */
window.cru.toType = window.toType || function(a) { return({}).toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase(); };


/**
 * Sugar method to check if an object is null or undefined
 * @method notNull
 * @param {Object} obj the object to check for null or undefined
 * @return {Boolean} Whether or not the object is null - returns true if the <code>obj</code> is NOT <code>null</code> or <code>undefined</code>
 * @protected
 **/
window.cru.notNull = function(obj) { return(obj != null && typeof obj !== 'undefined'); };


// // usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = window.trace = function f() {
	log.history = log.history || [];
	log.history.push(arguments);
	if(this.console) {
		var args = arguments,
			newarr;
		args.callee = args.callee.caller;
		newarr = [].slice.call(args);
		if(typeof console.log === 'object') log.apply.call(console.log, console, newarr);
		else console.log.apply(console, newarr);
	}
};

}());