import { Reducer } from "redux";
import { MovieActionTypes, MOVIES, TYPES } from "./types";

const INITIAL_STATE: MOVIES = {
    movies: []
}

const reducer: Reducer<MOVIES, MovieActionTypes> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SET_MOVIES_DATA:
          return {
              ...state,
              movies: action.value
          }
        case TYPES.CLEAR_MOVIES_DATA:
          return {
            ...state,
            movies: INITIAL_STATE.movies
          }
        default:
          return state
    }
}

export default reducer;