import store from "../..";
import { InfoMovie } from "../../../models/movie";
import { TYPES } from "./types";

export const setMoviesData = (value: InfoMovie[]) => 
    store.dispatch({
        type: TYPES.SET_MOVIES_DATA,
        value
    })

export const clearMoviesData = () =>
    store.dispatch({
        type: TYPES.CLEAR_MOVIES_DATA
    })