import store from "../..";
import { TYPES } from "./types";

export const setLanguagesData = (value: string[]) =>
    store.dispatch({
        type: TYPES.SET_LANGUAGES_DATA,
        value
    })

export const clearLanguagesData = () =>
    store.dispatch({
        type: TYPES.CLEAR_LANGUAGES_DATA
    })

export const setSelectLangData = (value: string) =>
    store.dispatch({
        type: TYPES.SET_SELECTLANG_DATA,
        value
    })

export const clearSelectLangData = () =>
    store.dispatch({
        type: TYPES.CLEAR_SELECTLANG_DATA
    })