EasyGA Track everything, everywhere.
====================================

EasyGA is a JavaScript layer on top of Google Analytics which automatically tracks all events, views, links and other metrics without requiring any additional javascript code to be written. Just include the library, set the tracking code and go!

Getting started
---------------

Getting started is simple, just include the following lines in your HTML file:

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://www.google-analytics.com/analytics.js"></script>
    <script src="/build/easy-google-analytics.js"></script>
    <script>
        window._easyGA = new EasyGA('UA-121792664-1');
    </script> 
    

### Source code

[https://github.com/alphagov/easy-google-analytics](https://github.com/alphagov/easy-google-analytics)

Auto tracking
-------------

Automatic tracking includes the following:

*   Page views
*   Events
*   Custom dimensions
*   Virtual page views
*   External links

### Page views

Page tracking allows you to measure the number of views you had for a particular page on your website.  
Every page is tracked automatically, no need for any code 🎉 !

### Events

Events are user interactions with content that can be tracked independently from a web page or a screen load. Downloads, mobile ad clicks, gadgets, Flash elements, AJAX embedded elements, and video plays are all examples of actions you might want to track as Events.

    <button type="submit" 
        data-analytics="trackEvents" 
        data-analytics-category="{category}"
        data-anlaytics-action="{action}"
        data-analytics-label="{label|optional}"
        data-analytics-target-selector="{selector|optional}"
    >Submit</button> 
        

### Custom Dimenions

Custom dimensions and metrics are a powerful way to send custom data to Google Analytics. Web developers can use custom dimensions and metrics to segment and measure differences between logged in and logged out users, authors of pages, levels in games, or any other business data you have on a page.

    <meta 
        data-analytics="customDimension" 
        data-id="{dimensionId}"
        data-value="{dimensionValue}"> 
        

### Virtual page views

Page tracking allows you to measure the number of views you had for a particular page on your website. Pages often correspond to an entire HTML document, but they can also represent dynamically loaded content; this is known as "virtual pageviews".

    <div 
        data-analytics="trackPageView" 
        data-url="{virtualPageUrl}" 
    ></div> 
        

### External links

External links are tracked automatically, no need for any code 🎉 !