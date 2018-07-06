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
