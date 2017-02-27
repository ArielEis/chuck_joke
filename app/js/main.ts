import * as angular from "angular";
import { appModule } from './appModule';
import {JokeController} from "../components/joke/joke.component";

appModule;
JokeController;

angular.bootstrap(document.getElementById('html'), ['web-api']);