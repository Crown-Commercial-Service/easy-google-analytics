const Events = require('./events');
const PageViews = require('./page-views');
const AutoTrackers = require('./auto-trackers');

const EasyGA = class {

    constructor(GA_CODE = '') {
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        this.ga = window.ga;
        this.ga('create', GA_CODE, 'auto');
        this.ga('send', 'pageview');

        this.events = new Events(this.ga);
        this.pageViews = new PageViews(this.ga);
        this.AutoTrackers = new AutoTrackers(this.ga);
        this.init();
    }

    init() {
        console.info('EasyGA Initalised.')
    }

};

module.exports = EasyGA;

if (window) {
    window.EasyGA = EasyGA;
}