import { InfoMovie } from "../../../models/movie";

export enum TYPES {
    SET_MOVIES_DATA = "SET_MOVIES_DATA",
    CLEAR_MOVIES_DATA = "CLEAR_MOVIES_DATA"
}

export interface MOVIES {
    movies: InfoMovie[]
}


export interface SetMoviesDataAction {
    type: TYPES.SET_MOVIES_DATA;
    value: InfoMovie[];
}

export interface ClearMoviesDataAction {
    type: TYPES.CLEAR_MOVIES_DATA;
}

export type MovieActionTypes = SetMoviesDataAction | ClearMoviesDataAction;
