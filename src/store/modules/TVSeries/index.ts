import { Reducer } from "redux"
import { TVSERIES, TVSeriesActionTypes, TYPES } from "./types"

const INITIAL_STATE = {
    tvseries: []
}

const reducer: Reducer<TVSERIES, TVSeriesActionTypes> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TYPES.SET_TVSERIES_DATA:
            return {
                ...state,
                tvseries: action.value
            }
        case TYPES.CLEAR_TVSERIES_DATA:
            return {
                ...state,
                tvseries: []
            }
        default:
            return state;
    }
}

export default reducer