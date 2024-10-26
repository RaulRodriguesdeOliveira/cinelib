export enum TYPES {
  SET_LANGUAGES_DATA = "SET_LANGUAGES_DATA",
  CLEAR_LANGUAGES_DATA = "CLEAR_LANGUAGES_DATA",
  SET_SELECTLANG_DATA = "SET_SELECTLANG_DATA",
  CLEAR_SELECTLANG_DATA = "CLEAR_SELECTLANG_DATA",
  SET_SELECTTITLE_DATA = "SET_SELECTTITLE_DATA",
  CLEAR_SELECTTITLE_DATA = "CLEAR_SELECTTITLE_DATA",
  SET_SEARCHTITLE_DATA = "SET_SEARCHTITLE_DATA",
  CLEAR_SEARCHTITLE_DATA = "CLEAR_SEARCHTITLE_DATA",
  SET_FILTEREDCONTENT_DATA = "SET_FILTEREDCONTENT_DATA",
  CLEAR_FILTEREDCONTENT_DATA = "CLEAR_FILTEREDCONTENT_DATA"
}
  
 export interface Content {
  id?: number;
  title?: string;
  name?: string;
  poster_path?: string;
}

export interface GLOBAL {
  languages: string[],
  selectLang: string,
  titles: string[],
  search: string,
  filteredContents: Content[]
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

export interface setSelectTitleDataAction {
  type: TYPES.SET_SELECTTITLE_DATA;
  value: string[];
}

export interface clearSelectTitleDataAction {
  type: TYPES.CLEAR_SELECTTITLE_DATA;
}

export interface setSearchTitleDataAction {
  type: TYPES.SET_SEARCHTITLE_DATA;
  value: string;
}

export interface clearSearchDataAction {
  type: TYPES.CLEAR_SEARCHTITLE_DATA;
}

export interface setFilteredContentDataAction {
  type: TYPES.SET_FILTEREDCONTENT_DATA;
  value: Content[];
}

export interface clearFilteredContentDataAction {
  type: TYPES.CLEAR_FILTEREDCONTENT_DATA;
}

export type LanguagesActionTypes =
  | setLanguagesDataAction
  | clearLanguagesDataAction
  | setSelectLangDataAction
  | clearSelectLangDataAction;

export type TitlesActionTypes = setSelectTitleDataAction | clearSelectTitleDataAction;

export type SearchActionTypes = setSearchTitleDataAction | clearSearchDataAction;

export type FilteredActionTypes = setFilteredContentDataAction | clearFilteredContentDataAction;
  
export type CombineActionTypes = LanguagesActionTypes | TitlesActionTypes | SearchActionTypes | FilteredActionTypes;