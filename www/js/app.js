// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('AMBIZ', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
<<<<<<< HEAD
  $ionicPlatform.ready(function() {
=======
  $ionicPlatform.ready(function(){

>>>>>>> 1e552ebc18b4d1b2bd378f3fbf3ae87f0833155d
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
<<<<<<< HEAD
=======

>>>>>>> 1e552ebc18b4d1b2bd378f3fbf3ae87f0833155d
  });
})



.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})





.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive






.state('inventories',{
  url:'/inventories',
  abstract:true,
  templateUrl:'views/inventories/inventories.html'
})

.state('settings',{
  url:'/settings',
  controller:'ListController',
  templateUrl:'views/sidemenus/settings.html'
})

.state('logout',{
  url:'/logout',
  controller:'ListController',
  templateUrl:'views/sidemenus/logout.html'
})

.state('offline',{
  url:'/offline',
  controller:'ListController',
  templateUrl:'views/sidemenus/offline.html'
})

.state('aboutus',{
  url:'/aboutus',
  controller:'ListController',
  templateUrl:'views/sidemenus/aboutus.html'
})

.state('help',{
  url:'/help',
  controller:'ListController',
  templateUrl:'views/sidemenus/help.html'
})


.state('inventories.list',{
  url:'/list',
  views:{
    'list-inventories' : {
    templateUrl:'views/inventories/list.html',
    controller:'ListController'
       }
    }
})
.state('inventories.home',{
  url:'/home',
  views:{
    'home-inventories' : {
    templateUrl:'views/inventories/home.html'
       }
    }
})
.state('inventories.recording',{
  url:'/list/:iID',
  views:{
    'list-inventories' : {
    templateUrl:'views/inventories/recording.html',
    controller:'ListController'
       }
    }
})
;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/inventories/list');

<<<<<<< HEAD
=======




/*
  onDeviceReady = function () {
      app.receivedEvent('deviceready');

      oauth2.addKeycloak({
            name: 'keycloak',
            settings: {
              base: 'http://192.168.1.4:8080/auth',
              clientId: 'shoot-third-party',
              realm: "shoot-realm"
            }
          });

        oauth2.keycloak.requestAccess()
      .then(function (token) {
        console.log(token);
        // add token to the http header on futher http requests:
        // 'Authorization': 'Bearer ' + token
      }, function (err) {
        alert(err.error);
      });
  } */












>>>>>>> 1e552ebc18b4d1b2bd378f3fbf3ae87f0833155d
});
