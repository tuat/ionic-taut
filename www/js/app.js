var app = angular.module('taut', ['ionic', 'ngCordova', 'ngResource'])

app.constant('app', {
    version: Date.now(),
    apiInfo: {
        url   : 'http://localhost:8100',
        token : 'zM17y8Qry99WOEsOz0pAUQmP_AXDVthN_Y-zb1AuC5w='
    }
})

app.run(function($ionicPlatform, app, restAPI, toast, urlParams) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });

    app.restAPI   = restAPI;
    app.toast     = toast;
    app.urlParams = urlParams;
})

app.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.style('standard');
    $ionicConfigProvider.tabs.position('bottom');
});
