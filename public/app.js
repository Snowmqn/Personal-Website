angular.module('magoosh', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: 'landing/landingTmpl.html',
            controller: 'landingCtrl'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'projects/projectsTmpl.html',
            controller: 'projectsCtrl'
        })
        .state('game', {
            url: '/game',
            templateUrl: 'game/gameTmpl.html',
            controller: 'gameCtrl'
        })

    $urlRouterProvider
        .otherwise('/');
});