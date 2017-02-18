angular.module('magoosh')

.service('gameService', function () {

    //Save the game information to localStorage
    this.saveGame = function (total, increment) {

        localStorage.simpleGameTotal = total;
        localStorage.simpleGameIncrement = increment;
    };

    //Returns game obect, from localStorage if it exists there
    this.getGame = function() {

        if (localStorage.simpleGameTotal) return {
            total: localStorage.simpleGameTotal,
            increment: localStorage.simpleGameIncrement
        };
        else return {
            total: 0,
            increment: 1
        };
    }
});