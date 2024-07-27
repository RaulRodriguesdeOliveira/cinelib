import { Reducer } from "redux"
import { DETAILSTVSERIES, DetailsTvSeriesActionTypes, TYPES } from "./types"

const INITIAL_STATE = {
    detailsTvSeries: {
        adult: false,
        backdrop_path: "",
        created_by: [],
        episode_run_time: [],
        first_air_date: "",
        genres: [],
        homepage: "",
        id: 0,
        in_production: false,
        languages: [],
        last_air_date: "",
        last_episode_to_air: [],
        name: "",
        next_episode_to_air: "",
        networks: [],
        number_of_episodes: 0,
        number_of_seasons: 0,
        origin_country: [],
        original_language: "",
        original_name: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        production_companies: [],
        production_countries: [],
        seasons: [],
        spoken_languages: [],
        status: "",
        tagline: "",
        type: "",
        vote_average: 0,
        vote_count: 0,
      }
}

const reducer:Reducer<DETAILSTVSERIES, DetailsTvSeriesActionTypes> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TYPES.SET_DETAILSTVSERIES_DATA:
        return {
            ...state,
            detailsTvSeries: action.value
        }
        case TYPES.CLEAR_DETAILSTVSERIES_DATA:
            return {
                ...state,
                detailsTVSeries: INITIAL_STATE
            }
        default:
            return state
    }
}

export default reducer;