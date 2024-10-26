import store from "../..";
import { TYPES } from "./types";
import {Content} from "../Global/types"

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

export const setSelectTitleData = (value: string) =>
    store.dispatch({
        type: TYPES.SET_SELECTTITLE_DATA,
        value
    })

export const clearSelectTitleData = () =>
    store.dispatch({
        type: TYPES.CLEAR_SELECTTITLE_DATA
    })

export const setSearchTitleData = (value: string) =>
    store.dispatch({
        type: TYPES.SET_SEARCHTITLE_DATA,
        value
    })

export const clearSearchTitleData = () =>
    store.dispatch({
        type: TYPES.CLEAR_SEARCHTITLE_DATA
    })

export const setFilteredContentData = (value: Content[]) =>
    store.dispatch({
        type: TYPES.SET_FILTEREDCONTENT_DATA,
        value
    })

export const clearFilteredContentData = () =>
    store.dispatch({
        type: TYPES.CLEAR_FILTEREDCONTENT_DATA
    })