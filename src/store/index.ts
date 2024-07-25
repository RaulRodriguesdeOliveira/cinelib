import { createStore, Store } from "redux"
import rootReducer from "./modules/rootReducer"
import { MOVIES } from "./modules/Movies/types"
import { DETAILSMOVIE } from "./modules/InfoMovies/types"
import { GLOBAL } from "./modules/Global/types"


export interface ApplicationState {
    movies: MOVIES
    detailsMovie: DETAILSMOVIE
    global: GLOBAL
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store