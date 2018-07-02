var Events = require('./events');
var PageViews = require('./page-views');
var VirtualPageViews = require('./virtual-page-views');
var AutoTrackers = require('./auto-trackers');
var ua = require('universal-analytics');

var EasyGA = class {

    constructor() {
        this.visitor = ua('UA-49258698-1');
        this.events = new Events(this.visitor);
        this.pageViews = new PageViews(this.visitor);
        this.virtualPageViews = new VirtualPageViews(this.visitor);
        this.AutoTrackers = new AutoTrackers(this.visitor);
        this.init();
    }

    init() {
        console.log('hello');
    }

};

module.exports = new EasyGA();