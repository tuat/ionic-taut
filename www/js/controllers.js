app.controller('HomeCtrl', function(app, $scope, $location) {
    var loadPage = function() {
        $scope.loadingMore = true;

        app.restAPI.api.get({
            'token': app.apiInfo.token,
            'page' : $scope.page
        }, function(http) {
            var images = http.items,
                next   = http.next;

            $scope.images      = $scope.images.concat(images);
            $scope.hasMore     = (next !== null);
            $scope.page        = app.urlParams(next, 'page');
            $scope.loadingMore = false;
        }, function(http) {
            $scope.loadingMore = false;

            app.toast.error('Can not load the images');
        });
    }

    $scope.images       = [];
    $scope.hasMore      = false;
    $scope.page         = 1;
    $scope.loadingMore  = false;

    $scope.loadMore = function() {
        loadPage();
    };

    $scope.doRefresh = function() {
        $scope.loadingMore = true;

        app.restAPI.api.get({
            'token': app.apiInfo.token,
            'page' : 1
        }, function(http) {
            var images = http.items;

            $scope.images      = images.concat($scope.images);
            $scope.loadingMore = false;

            $scope.$broadcast('scroll.refreshComplete');
        }, function(http) {
            $scope.loadingMore = false;

            $scope.$broadcast('scroll.refreshComplete');

            app.toast.error('Can not load the latest images');
        });
    };

    loadPage();
});

app.controller('AboutCtrl', function(app, $scope, $cordovaInAppBrowser) {
    $scope.openUrl = function(url) {
        $cordovaInAppBrowser
            .open(url, '_system')
            .then(
                function(event) {
                    // success
                },
                function(event) {
                    app.toast.error('Can not open ' + url);
                }
            );
    }
});
