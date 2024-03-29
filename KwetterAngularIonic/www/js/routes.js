angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.profiles', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/profiles.html',
        controller: 'profilesCtrl'
      }
    }
  })

  .state('tabsController.timeline', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/timeline.html',
        controller: 'timelineCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.profilePage', {
    url: '/page5/:name',
    views: {
      'tab2': {
        templateUrl: 'templates/profilePage.html',
        controller: 'profilePageCtrl'
      }
    }
  })

  .state('tabsController.profileEditor', {
    url: '/page6/:name',
    views: {
      'tab2': {
        templateUrl: 'templates/profileEditor.html',
        controller: 'profileEditorCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});