const React = require('react'),
    ReactDOM = require('react-dom'),
    routes = require('./config/routes'),

    Raven = require('raven-js'),
    sentryKey = 'db433ea4a8184d38955b2d1a7f1e90f2',
    sentryApp = '104904',
    sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

let _APP_INFO = {
    name: 'Github Battle',
    version: '1.0'
};

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch
    }

}).install();


ReactDOM.render(
    routes,
    document.getElementById('app')
);