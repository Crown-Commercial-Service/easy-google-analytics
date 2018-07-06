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
        $('meta[name="ga_customDimension"]').each(function(index, customDimension){
            var dimensionId = $(customDimension).attr('data-id');
            var dimensionValue = $(customDimension).attr('data-value');
            if ( dimensionId && dimensionValue ) {
                _this.EasyGA.ga.customDimensions.set(dimensionId, dimensionValue);
            }
        });
    }

    trackEvents() {
        var _this = this;
        $('body').on('click', '[data-analytics=trackEvent]', function(e){
            var $target = $(e.target);
            var category = $target.attr('data-analytics-category');
            var action = $target.attr('data-analytics-action');
            var label = $target.attr('data-analytics-label');
            
            // if data-analytics-target-selector is set
            // then get the value of the target
            // selector needs to be a CSS selector
            // eg. ".className", "#id", "input[name=NameOfRadio]:checked"
            var selector = $target.attr('data-analytics-target-selector');

            if( selector )
            {
                label = $(selector).val();
            }

            // if no label is set then use the text of target
            // if no text available then use the href of target
            var href = $target.attr('href');
            var text = $target.text();
            if ( !label && text ) label = text;
            else if ( !label && !text && href ) label = href;

            _this.EasyGA.events.send(category, action, label);
        });
    }

    trackVirtualPageViews() {
        var _this = this;
        $('[data-analytics=trackPageView]').each(function(e){
            var $target = $(e.target);
            var url = $target.attr('data-url');
            if ( url ) {
                _this.pageViews.send(url);
            }
        });
    }

};

module.exports = AutoTrackers;
