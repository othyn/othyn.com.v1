// NPM - CSS - Lib
require('animate.css/animate.css');
require('font-awesome/css/font-awesome.css');

// LOCAL - JS - Lib
require('script-loader!./scramble.lib.js');

// LOCAL - SCSS - Project
require('../scss/indexComponent.scss');

// Text Scramble Init: http://codepen.io/soulwire/pen/mErPAK
var phrases = ['Hi, I\'m Ben', 'or often Othyn', 'I like to build stuff', 'Explore stuff', 'Learn stuff', 'Just lots of stuff really'];
var Scramble = new TextScramble(document.querySelector('#scramble'));
var counter = 0;
var next = function next() {
	Scramble.setText(phrases[counter]).then(function () {
		setTimeout(next, 3000);
	});
	counter = (counter + 1) % phrases.length;
};
next();