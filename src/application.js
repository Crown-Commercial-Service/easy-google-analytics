const Events = require('./events');
const PageViews = require('./page-views');
const AutoTrackers = require('./auto-trackers');
const CustomDimensions = require('./custom-dimensions');

const EasyGA = class {

    constructor(GA_CODE = '') {
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        this.ga = window.ga;
        this.ga('create', GA_CODE, 'auto');

        this.events = new Events(this.ga);
        this.pageViews = new PageViews(this.ga);
        this.customDimensions = new CustomDimensions(this.ga);
        this.autoTrackers = new AutoTrackers(this);
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
