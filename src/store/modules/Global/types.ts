export enum TYPES {
  SET_LANGUAGES_DATA = "SET_LANGUAGES_DATA",
  CLEAR_LANGUAGES_DATA = "CLEAR_LANGUAGES_DATA",
  SET_SELECTLANG_DATA = "SET_SELECTLANG_DATA",
  CLEAR_SELECTLANG_DATA = "CLEAR_SELECTLANG_DATA",
}

export interface GLOBAL {
  languages: string[];
  selectLang: string;
}

export interface setLanguagesDataAction {
  type: TYPES.SET_LANGUAGES_DATA;
  value: string[];
}

export interface clearLanguagesDataAction {
  type: TYPES.CLEAR_LANGUAGES_DATA;
}

export interface setSelectLangDataAction {
  type: TYPES.SET_SELECTLANG_DATA;
  value: string;
}

export interface clearSelectLangDataAction {
  type: TYPES.CLEAR_SELECTLANG_DATA;
}

export type LanguagesActionTypes =
  | setLanguagesDataAction
  | clearLanguagesDataAction
  | setSelectLangDataAction
  | clearSelectLangDataAction;
