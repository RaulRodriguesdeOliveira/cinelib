import { Reducer } from "redux";
import { DETAILSMOVIE, DetailsMovieActionTypes, TYPES } from "./types";

const INITIAL_STATE: DETAILSMOVIE = {
  detailsMovie: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    origin_country: [],
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
};

const reducer: Reducer<DETAILSMOVIE, DetailsMovieActionTypes> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_DETAILSMOVIES_DATA:
      return {
        ...state,
        detailsMovie: action.value,
      };
    case TYPES.CLEAR_DETAILSMOVIES_DATA:
      return {
        ...state,
        detailsMovie: INITIAL_STATE.detailsMovie,
      };
    default:
      return state;
  }
};

export default reducer;
