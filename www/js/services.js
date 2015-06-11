app.factory('restAPI', function(app, $resource) {
    return {
        api: $resource(app.apiInfo.url + '/api'),
    }
});

app.factory('toast', function($log) {
    var toast = {};

    angular.forEach(['info', 'error', 'success', 'warning'], function (method) {
        toast[method] = function (message, title) {
            var log     = $log[method] || $log.log,
                title   = title,
                message = angular.isObject(message) ? angular.toJson(message) : message;

            log(message, title);

            toastr[method](message, title);
        };
    });

    toastr.options = angular.extend({
        positionClass: 'toast-bottom-full-width'
    }, toast.options);

    toast.clear = toastr.clear;

    return toast;
});

app.factory('urlParams', function() {
    return function(url, name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url)||[,""])[1].replace(/\+/g, '%20'))||null
    };
});
