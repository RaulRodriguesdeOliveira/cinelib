import { DetailsMovie } from "../../../models/movie"

export enum TYPES {
    SET_DETAILSMOVIES_DATA = "SET_DETAILSMOVIES_DATA",
    CLEAR_DETAILSMOVIES_DATA = "CLEAR_DETAILSMOVIES_DATA"
}

export interface DETAILSMOVIE {
   detailsMovie: DetailsMovie
}

export interface setDetailsMovieAction {
    type: TYPES.SET_DETAILSMOVIES_DATA;
    value: DetailsMovie
}

export interface clearDetailsMoviesAction {
    type: TYPES.CLEAR_DETAILSMOVIES_DATA;
}

export type DetailsMovieActionTypes = setDetailsMovieAction | clearDetailsMoviesAction;