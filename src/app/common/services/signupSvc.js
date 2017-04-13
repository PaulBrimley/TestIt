app.factory('signupSvc', ['$http', 'APIURL', function($http, APIURL) {

    return {

        signup: function(user) {
            return $http({
                method: 'POST',
                url: APIURL.baseUrl + 'auth/addAccount',
                data: user
            }).then(function (response) {
                console.log(response);
                return true;
            }).catch(function (msg) {
                console.log('error signing up: ', msg);
                return false;
            });
        }

    };
}]);