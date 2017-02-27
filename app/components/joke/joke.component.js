"use strict";
var appModule_1 = require("../../js/appModule");
var JokeController = (function () {
    function JokeController($http) {
        this.$http = $http;
        this._apiUrl = 'http://api.icndb.com/jokes/random';
        this._joke = '';
        var context = this;
        this.doRequest(context);
    }
    JokeController.prototype.doRequest = function (context) {
        context.$http({
            method: 'GET',
            url: this._apiUrl
        }).then(function successCallback(response) {
            context._joke = 'Joke: ' + response.data.value.joke;
        }, function errorCallback(response) {
            context._error = "Huston we have a problem";
        });
    };
    JokeController.prototype.getJoke = function () {
        var context = this;
        this.doRequest(context);
    };
    return JokeController;
}());
exports.JokeController = JokeController;
appModule_1.appModule.component("myJoke", {
    controller: JokeController,
    templateUrl: "app/components/joke/joke.component.html",
});
//# sourceMappingURL=joke.component.js.map