import {pokemonsAPI} from "../api/api";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_POKEMONS = 'SET_POKEMONS'
let initialState = {
    isFetching: true,
    pokemons: []
}
const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS: {
            return {
                ...state,
                pokemons: [...action.pokemons]
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state
    }
}

export const setPokemons = (pokemons) => ({type: SET_POKEMONS, pokemons})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getPokemons = (count) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await pokemonsAPI.getPokemons(count)
    dispatch(setPokemons(data.results))
    dispatch(toggleIsFetching(false))

}
export default pokemonsReducer