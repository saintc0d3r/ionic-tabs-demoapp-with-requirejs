/**
 * Created by wendysa on 8/16/15.
 */
require.config({
    baseUrl: '',
    paths:  {
        'ionic': 'lib/ionic/js/ionic.bundle',
        'ngCordova': 'lib/ngCordova/dist/ng-cordova.min',
        'cordova': 'cordova',

        'app': 'js/app',
        'controllers': 'js/controllers',
        'services': 'js/services'
    },
    shim: {
        'ngCordova': ['ionic'],
        'cordova': ['ngCordova'], // cordova.js depends on ngCordova.js

        // Controller & services files depend on cordova.js
        'controllers': ['cordova'],
        'services': ['cordova'],

        // app depend on cordova.js, controller & service files
        'app': ['cordova', 'controllers', 'services']

    }
});

require(['app'], function(){
    angular.bootstrap(document.body, ['demo-require-js']);
});