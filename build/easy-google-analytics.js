(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Events = require('./events');
const PageViews = require('./page-views');
const AutoTrackers = require('./auto-trackers');
const CustomDimensions = require('./custom-dimensions');

const EasyGA = class {

    constructor(GA_CODE = '') {
        window.ga = window.ga || function () {
            (ga.q = ga.q || []).push(arguments);
        };ga.l = +new Date();
        this.ga = window.ga;
        this.ga('create', GA_CODE, 'auto');

        this.events = new Events(this.ga);
        this.pageViews = new PageViews(this.ga);
        this.customDimensions = new CustomDimensions(this.ga);
        this.autoTrackers = new AutoTrackers(this);
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

},{"./auto-trackers":2,"./custom-dimensions":3,"./events":4,"./page-views":5}],2:[function(require,module,exports){
var AutoTrackers = class {

    constructor(EasyGA) {
        console.info('INIT: AutoTracker');
        this.EasyGA = EasyGA;
        this.trackPageView();
        this.trackExternalLinks();
        this.setCustomDimensions();
        this.trackEvents();
        this.trackVirtualPageViews();
    }

    trackPageView() {
        this.EasyGA.pageViews.send();
    }

    trackExternalLinks() {
        var _this = this;
        $('a').filter(function () {
            return this.hostname && this.hostname !== window.location.hostname;
        }).on('click', function (e) {
            var $target = $(e.target);
            var category = 'external-link-all';
            var action = $target.text();
            var label = $target.attr('href');
            _this.EasyGA.events.send(category, action, label);
        });
    }

    setCustomDimensions() {
        var _this = this;
        $('meta[name="ga_customDimension"]').each(function (index, customDimension) {
            var dimensionId = $(customDimension).attr('data-id');
            var dimensionValue = $(customDimension).attr('data-value');
            if (dimensionId && dimensionValue) {
                _this.EasyGA.ga.customDimensions.set(dimensionId, dimensionValue);
            }
        });
    }

    trackEvents() {
        var _this = this;
        $('body').on('click', '[data-analytics=trackEvent]', function (e) {
            var $target = $(e.target);
            var category = $target.attr('data-analytics-category');
            var action = $target.attr('data-analytics-action');
            var label = $target.attr('data-analytics-label');

            // if data-analytics-target-selector is set
            // then get the value of the target
            // selector needs to be a CSS selector
            // eg. ".className", "#id", "input[name=NameOfRadio]:checked"
            var selector = $target.attr('data-analytics-target-selector');

            if (selector) {
                label = $(selector).val();
            }

            // if no label is set then use the text of target
            // if no text available then use the href of target
            var href = $target.attr('href');
            var text = $target.text();
            if (!label && text) label = text;else if (!label && !text && href) label = href;

            _this.EasyGA.events.send(category, action, label);
        });
    }

    trackVirtualPageViews() {
        var _this = this;
        $('[data-analytics=trackPageView]').each(function (e) {
            var $target = $(e.target);
            var url = $target.attr('data-url');
            if (url) {
                _this.pageViews.send(url);
            }
        });
    }

};

module.exports = AutoTrackers;

},{}],3:[function(require,module,exports){
var CustomDimensions = class {

    constructor(ga) {
        console.info('INIT: CustomDimensions');
        this.ga = ga;
    }

    set(dimensionId, dimensionValue) {
        this.ga('set', dimensionId, dimensionValue);
    }

};

module.exports = CustomDimensions;

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
var PageViews = class {

    constructor(ga) {
        console.info('INIT: PageViews');
        this.ga = ga;
    }

    send(path = window.location.pathname) {
        this.ga('send', 'pageview', path);
    }

};

module.exports = PageViews;

},{}]},{},[1]);
