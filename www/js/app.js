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

        if(window.AdMob) {
            var adMobId = {
                banner      : '',
                interstitial: ''
            };

            if (/(android)/i.test(navigator.userAgent)) {
                adMobId.banner       = '__YOUR_BANNER_KEY_';
                adMobId.interstitial = '__YOUR_INTERSTITIAL_KEY_'; // Full Page
            }

            if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                adMobId.banner       = '';
                adMobId.interstitial = '';
            }

            AdMob.createBanner({
                adId        : adMobId.banner,
                isTesting   : true,
                overlap     : false,
                offsetTopBar: false,
                position    : AdMob.AD_POSITION.BOTTOM_CENTER,
                bgColor     : 'black'
            });

            AdMob.prepareInterstitial({
                adId    : admobid.interstitial,
                autoShow: true
            });

            console.log('AdMob is enabled', adMobId);
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
