(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Events = require('./events');
const PageViews = require('./page-views');
const AutoTrackers = require('./auto-trackers');

const EasyGA = class {

    constructor(GA_CODE = '') {
        window.ga = window.ga || function () {
            (ga.q = ga.q || []).push(arguments);
        };ga.l = +new Date();
        this.ga = window.ga;
        this.ga('create', GA_CODE, 'auto');
        this.ga('send', 'pageview');

        this.events = new Events(this.ga);
        this.pageViews = new PageViews(this.ga);
        this.AutoTrackers = new AutoTrackers(this.ga);
        this.init();
    }

    init() {
        console.info('EasyGA Initalised.');
    }

};

module.exports = EasyGA;

if (window) {
    window.EasyGA = EasyGA;
}

},{"./auto-trackers":2,"./events":3,"./page-views":4}],2:[function(require,module,exports){
var AutoTrackers = class {

    constructor(GA) {
        console.info('INIT: AutoTracker');
        this.GA = GA;
    }

};

module.exports = AutoTrackers;

},{}],3:[function(require,module,exports){
var Events = class {

    constructor(ga) {
        console.info('INIT: Events');
        this.ga = ga;
    }

    send(category, action, label, transport = 'beacon') {
        this.ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            transport: transport
        });
    }

};

module.exports = Events;

},{}],4:[function(require,module,exports){
var PageViews = class {

    constructor(ga) {
        console.info('INIT: PageViews');
        this.ga = ga;
        this.send();
    }

    send(path = '/') {
        this.ga('send', 'pageview', path);
    }

};

module.exports = PageViews;

},{}]},{},[1]);
