import store from "../..";
import { DetailsTvSeries } from "../../../models/tvSerie";
import { TYPES } from "./types";

export const setDetailsTvSeries = (value: DetailsTvSeries) => {
    store.dispatch({
        type: TYPES.SET_DETAILSTVSERIES_DATA,
        value
    })
}

export const clearDetailsTvSeries = () => {
    store.dispatch({
        type: TYPES.CLEAR_DETAILSTVSERIES_DATA
    })
}