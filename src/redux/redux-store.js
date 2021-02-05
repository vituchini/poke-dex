import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import pokemonsReducer from "./pokemons-reducer";
let reducers = combineReducers({
    pokemonsPage:pokemonsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
   applyMiddleware(thunkMiddleware)
));
export default store

window.store = store