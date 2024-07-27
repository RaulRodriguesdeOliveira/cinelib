import { combineReducers } from "redux";
import movies from './Movies/index'
import detailsMovie from './InfoMovies/index'
import global from './Global/index'
import tvseries from './TVSeries/index'
import detailsTvSeries from "./InfoTVSeries/index";

export default combineReducers({
    movies,
    detailsMovie,
    tvseries,
    global,
    detailsTvSeries
})