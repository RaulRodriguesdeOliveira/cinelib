import { DetailsTvSeries } from "../../../models/tvSerie";

export enum TYPES {
    SET_DETAILSTVSERIES_DATA = "SET_DETAILSTVSERIES_DATA",
    CLEAR_DETAILSTVSERIES_DATA = "CLEAR_DETAILSTVSERIES_DATA"
}

export interface DETAILSTVSERIES {
    detailsTvSeries: DetailsTvSeries
}

export interface setDetailsTvSeriesAction {
    type: TYPES.SET_DETAILSTVSERIES_DATA,
    value: DetailsTvSeries
}

export interface clearDetailsTvSeriesAction {
    type: TYPES.CLEAR_DETAILSTVSERIES_DATA
}

export type DetailsTvSeriesActionTypes = setDetailsTvSeriesAction | clearDetailsTvSeriesAction