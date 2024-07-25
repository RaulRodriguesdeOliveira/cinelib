import { Reducer } from "redux";
import { GLOBAL, LanguagesActionTypes, TYPES } from "./types";

const INITIAL_STATE: GLOBAL = {
  languages: [],
  selectLang: 'en-US'
};

const reducer: Reducer<GLOBAL, LanguagesActionTypes> = (state = INITIAL_STATE, action) => {
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
      default:
        return state
  }
};

export default reducer