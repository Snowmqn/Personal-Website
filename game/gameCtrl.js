angular.module('magoosh')

.controller('gameCtrl', function ($scope, $interval, gameService) {



    //Code for importing from localStorage
    function initalize () {
        var gameObject = gameService.getGame();
        console.log(gameObject);
            $scope.total = parseInt(gameObject.total);
            $scope.increment = parseInt(gameObject.increment);
    }
    initalize();

    $scope.updateIncrement = function () {
        if ($scope.total < $scope.increment) return;
        $scope.increment = $scope.total;
        $scope.total = 0;
        saveGame($scope.total, $scope.increment);
    };
    
    function updateTotal () {
        $interval(function() {
            $scope.total = $scope.total + $scope.increment;
          }, 1000);
        
        $interval( () => {
            saveGame($scope.total, $scope.increment);
        }, 10000);
    };
    updateTotal();

    //Save the game to localStorage
    function saveGame (total, increment) {
        gameService.saveGame(total, increment);
    };
});