app.controller('HomeCtrl', function(app, $scope, $location) {
    var loadPage = function() {
        app.restAPI.api.get({
            'token': app.apiInfo.token,
            'page' : $scope.page
        }, function(http) {
            var images = http.items,
                next   = http.next;

            $scope.images   = $scope.images.concat(images);
            $scope.hasMore  = (next !== null);
            $scope.page     = app.urlParams(next, 'page');
        }, function(http) {
            app.toast.error('Can not load the images');
        });

    }

    $scope.images   = [];
    $scope.hasMore  = false;
    $scope.page     = 1;
    $scope.loadMore = function() {
        loadPage();
    };

    loadPage();
});
