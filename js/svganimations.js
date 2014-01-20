/**
 * svganimations2.js v1.0.0
 * http://www.codrops.com
 *
 * the svg path animation is based on http://24ways.org/2013/animating-vectors-with-svg/ by Brian Suda (@briansuda)
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function() {

	'use strict';

	window.requestAnimFrame = function(){
		return (
			window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback){
				window.setTimeout(callback, 1000 / 60);
			}
		);
	}();

	window.cancelAnimFrame = function(){
		return (
			window.cancelAnimationFrame       ||
			window.webkitCancelAnimationFrame ||
			window.mozCancelAnimationFrame    ||
			window.oCancelAnimationFrame      ||
			window.msCancelAnimationFrame     ||
			function(id){
				window.clearTimeout(id);
			}
		);
	}();

	function SVGEl( el ) {
		this.el = el;
		this.current_frame = 0;
		this.total_frames = 60;
		this.path = [];
		this.length = [];
		this.handle = 0;
		this.init();
	}

	SVGEl.prototype.init = function() {
		var self = this;
		[].slice.call( this.el.querySelectorAll( 'path' ) ).forEach( function( path, i ) {
			self.path[i] = path;
			var l = self.path[i].getTotalLength();
			self.length[i] = l;
			self.path[i].style.strokeDasharray = l + ' ' + l;
			self.path[i].style.strokeDashoffset = l;
		} );
	};

	SVGEl.prototype.render = function( domEl ) {
		if( this.rendered ) return;
		if( domEl ) {
			this.domEl = domEl;
		}
		this.rendered = true;
		this.draw();
	};

	SVGEl.prototype.draw = function() {
		var self = this,
			progress = this.current_frame/this.total_frames;
		if (progress > 1) {
			window.cancelAnimFrame(this.handle);
			this.showDomEl();
		} else {
			this.current_frame++;
			for(var j=0, len = this.path.length; j<len;j++){
				this.path[j].style.strokeDashoffset = Math.floor(this.length[j] * (1 - progress));
			}
			this.handle = window.requestAnimFrame(function() { self.draw(); });
		}
	};

	SVGEl.prototype.showDomEl = function() {
		if( this.domEl ) {
			classie.remove( this.domEl, 'hide' );
			classie.add( this.domEl, 'show' );
		}
	};
	
	function init() {
		var svgs = Array.prototype.slice.call( document.querySelectorAll( '#first svg' ) );

		svgs.forEach( function( el ) {
			var svg = new SVGEl( el );

			setTimeout( function() {
				svg.render();
			}, Math.floor( Math.random() * 4001 + 5000 ) );
		} );

		var iphone = Array.prototype.slice.call( document.querySelectorAll( '#internet-iphone' ) );
		var ipad = Array.prototype.slice.call( document.querySelectorAll( '#internet-ipad' ) );
		var laptop = Array.prototype.slice.call( document.querySelectorAll( '#internet-laptop' ) );
		var computer = Array.prototype.slice.call( document.querySelectorAll( '#internet-computer' ) );
		var tv = Array.prototype.slice.call( document.querySelectorAll( '#internet-tv' ) );
		var robot = Array.prototype.slice.call( document.querySelectorAll( '#internet-robot' ) );

		iphone.forEach( function( el ) {
			var svg = new SVGEl( el );

			setTimeout( function() {
				svg.render();
			}, 7500 );
		} );

		ipad.forEach( function( el ) {
			var svg = new SVGEl( el );

			setTimeout( function() {
				svg.render();
			}, 8250 );
		} );

		laptop.forEach( function( el ) {
			var svg = new SVGEl( el );

			setTimeout( function() {
				svg.render();
			}, 9000 );
		} );

		computer.forEach( function( el ) {
			var svg = new SVGEl( el );

			setTimeout( function() {
				svg.render();
			}, 9500 );
		} );

		tv.forEach( function( el ) {
			var svg = new SVGEl( el );

			setTimeout( function() {
				svg.render();
			}, 10000 );
		} );

		robot.forEach( function( el ) {
			var svg = new SVGEl( el );

			setTimeout( function() {
				svg.render();
			}, 10500 );
		} );
	}

	init();

})();