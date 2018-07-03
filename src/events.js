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