import {appModule} from "../../js/appModule";

export class JokeController{

    _apiUrl: string;
    _joke: string;
    _error: string;

    constructor(private $http){
        this._apiUrl = 'http://api.icndb.com/jokes/random';
        this._joke = '';

        let context = this;
        this.doRequest(context);
    }

    doRequest(context){
        context.$http({
            method: 'GET',
            url: this._apiUrl

        }).then(function successCallback(response) {
            context._joke = 'Joke: '+response.data.value.joke;

        }, function errorCallback(response) {
            context._error = "Huston we have a problem";
        });
    }

    getJoke(){
        let context = this;
        this.doRequest(context);
    }
}

appModule.component("myJoke", {
    controller: JokeController,
    templateUrl: "app/components/joke/joke.component.html",
});