angular.module('app.controllers', ['ionic'])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('profilesCtrl', function($scope, $http, $ionicLoading) {

    //http://localhost:8080/KwetterWeb/api/kwetter/all

    $http({
        method: 'GET',
        url: 'http://localhost:9000/users'
    }).then(function successCallback(response) {
        $scope.users = response.data
    }, function errorCallback(response) {
        console.log(response)
    });

})
   
.controller('timelineCtrl', function($scope) {

})
      
.controller('profilePageCtrl', function($scope, $http, $stateParams, User) {

    //http://localhost:8080/KwetterWeb/api/kwetter/user/

    $scope.getUser = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:9000/user/' + $stateParams.name
        }).then(function successCallback(response) {
            $scope.user = response.data
        }, function errorCallback(response) {
            console.log(response)
        });
    }

    User.find($stateParams.id, function(user) {
        $scope.username = user
        console.log('stateparam: ' + $stateParams.name)
        $scope.getUser()
    })

})
   
.controller('profileEditorCtrl', function($scope, $http, $stateParams) {

    $http({
        method: 'GET',
        url: 'http://localhost:9000/user/' + $stateParams.name
    }).then(function successCallback(response) {
        $scope.user = response.data
        console.log('Showing data of user ' + $stateParams.name)
    }, function errorCallback(response) {
        console.log(response)
    });

    $scope.data = {}

    //http://localhost:8080/KwetterWeb/api/kwetter/user/update/' + $stateParams.name + '/' + $scope.data.bio;

    $scope.saveUser = function() {
        console.log('Saving user with new bio: ' + $scope.data.bio);
        var url = 'http://localhost:9000/user/edit/' + $stateParams.name + '/' + $scope.data.bio;
        $http.defaults.headers.post['Content-Type'] = 'text/plain';
        $http.post(url, $scope.data.bio).success(function(resp) {
            console.log('success');
            $state.go('profiles');
        }).error(function(resp) {
            console.log('error: ' + resp);
        });
    }

})

.factory('User', function($http, $stateParams) {

    function getUser(name, callback) {
        var url = 'http://localhost:8080/KwetterWeb/api/kwetter/user/' + name;

        $http.get(url).success(function(data) {
            callback(data.results);
        });
    }

    return {
        list: getUser,
        find: function(name, callback) {
            callback(name);
        }
    };

})