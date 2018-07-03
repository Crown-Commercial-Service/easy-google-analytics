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