import store from "../..";
import { DetailsMovie } from "../../../models/movie";
import { TYPES } from "./types";

export const setDetailsMovie = (value: DetailsMovie) => {
    store.dispatch({
        type: TYPES.SET_DETAILSMOVIES_DATA,
        value
    })
}

export const clearDetailsMovie = () => {
    store.dispatch({
        type: TYPES.CLEAR_DETAILSMOVIES_DATA
    })
}