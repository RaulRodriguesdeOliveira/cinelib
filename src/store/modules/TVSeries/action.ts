import store from "../..";
import { InfoTVSerie } from "../../../models/tvSerie";
import { TYPES } from "./types";

export const setTVSeriesData = (value: InfoTVSerie[]) => {
  store.dispatch({
    type: TYPES.SET_TVSERIES_DATA,
    value,
  });
};

export const clearTVSeriesData = () => {
  store.dispatch({
    type: TYPES.CLEAR_TVSERIES_DATA,
  });
};
