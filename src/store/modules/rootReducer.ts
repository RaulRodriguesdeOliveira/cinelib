import { combineReducers } from "redux";
import movies from './Movies/index'
import detailsMovie from './InfoMovies/index'
import global from './Global/index'

export default combineReducers({
    movies,
    detailsMovie,
    global
})