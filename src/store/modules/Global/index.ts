import { Reducer } from "redux";
import { CombineActionTypes, GLOBAL, TYPES } from "./types";

const INITIAL_STATE: GLOBAL = {
  languages: [],
  selectLang: 'en-US',
  titles: [],
  search: '',
  filteredContents: [{
    id: 0,
    title: '',
    name: '',
    poster_path: ''
  }]
};

const reducer: Reducer<GLOBAL, CombineActionTypes> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_LANGUAGES_DATA:
      return {
        ...state,
        languages: action.value,
      };
    case TYPES.CLEAR_LANGUAGES_DATA:
      return {
        ...state,
        languages: INITIAL_STATE.languages,
      }
    case TYPES.SET_SELECTLANG_DATA:
        return {
            ...state,
            selectLang: action.value,
        }
    case TYPES.CLEAR_SELECTLANG_DATA:
        return {
            ...state,
            selectLang: INITIAL_STATE.selectLang
        }
    case TYPES.SET_SELECTTITLE_DATA:
      return {
          ...state,
          titles: action.value,
      }
    case TYPES.CLEAR_SELECTTITLE_DATA:
      return {
          ...state,
          titles: INITIAL_STATE.titles
      }
    case TYPES.SET_SEARCHTITLE_DATA:
      return {
        ...state,
        search: action.value
      }
    case TYPES.CLEAR_SEARCHTITLE_DATA:
      return {
        ...state,
        search: INITIAL_STATE.search
      }
    case TYPES.SET_FILTEREDCONTENT_DATA:
      return {
        ...state,
        filteredContents: action.value
      }
    case TYPES.CLEAR_FILTEREDCONTENT_DATA:
      return {
        ...state,
        filteredContents: INITIAL_STATE.filteredContents
      }
      default:
        return state
  }
};

export default reducer