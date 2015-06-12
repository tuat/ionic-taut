app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "partials/tabs.html"
        })

        .state('tabs.home', {
            url: '/home',
            views: {
                'home-tab': {
                    templateUrl: 'tabs/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('tabs.media', {
            url: '/media/:id',
            views: {
                'home-tab': {
                    templateUrl: 'tabs/media.html',
                    controller: 'MediaCtrl'
                }
            }
        })

        .state('tabs.about', {
            url: '/about',
            views: {
                'about-tab': {
                    templateUrl: 'tabs/about.html',
                    controller: 'AboutCtrl'
                }
            }
        })

    $urlRouterProvider.otherwise("/tab/home");
});
