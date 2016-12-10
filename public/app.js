angular.module('magoosh', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: 'js/landing/landingTmpl.html',
            controller: 'landingCtrl'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'js/projects/projectsTmpl.html',
            controller: 'projectsCtrl'
        })
        .state('game', {
            url: '/game',
            templateUrl: 'js/game/gameTmpl.html',
            controller: 'gameCtrl'
        })

    $urlRouterProvider
        .otherwise('/');
});