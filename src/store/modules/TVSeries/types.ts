import { InfoTVSerie } from "../../../models/tvSerie";

export enum TYPES {
    SET_TVSERIES_DATA = "SET_TVSERIES_DATA",
    CLEAR_TVSERIES_DATA = "CLEAR_TVSERIES_DATA"
}

export interface TVSERIES {
    tvseries: InfoTVSerie[]
}

export interface SetTVSeriesDataAction {
    type: TYPES.SET_TVSERIES_DATA
    value: InfoTVSerie[]
}

export interface ClearTVSeriesDataAction {
    type: TYPES.CLEAR_TVSERIES_DATA
}

export type TVSeriesActionTypes = SetTVSeriesDataAction | ClearTVSeriesDataAction