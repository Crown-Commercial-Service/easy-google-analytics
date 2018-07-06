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
