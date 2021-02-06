import {pokemonsAPI} from "../api/api";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_POKEMONS = 'SET_POKEMONS'
const SET_POKEMONS_INFO = 'SET_POKEMONS_INFO'
let initialState = {
    isFetching: true,
    pokemons: [],
    pokemonsInfo: []

}
const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS: {
            return {
                ...state,
                pokemons: [...action.pokemons]
            }
        }
        case SET_POKEMONS_INFO: {
            return {
                ...state,
                pokemonsInfo: [...action.pokemonsInfo],
                pokemons:action.pokemonsInfo.filter(p=>{
                    return state.pokemons.some(el=>{
                        return el.name = p.name
                    })
                })
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
export const setPokemonsInfo = (pokemonsInfo) => ({type: SET_POKEMONS_INFO, pokemonsInfo})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getPokemons = (count) => async (dispatch) => {
    dispatch(toggleIsFetching(true))

    let data = await pokemonsAPI.getPokemons(count)
    dispatch(setPokemons(data.results))
    await dispatch(getPokemonsInfo(data.results))

    dispatch(toggleIsFetching(false))

}
export const getPokemonsInfo = (data) => async (dispatch) => {
    let pokeInfo = await Promise.all(data.map((p) => {
        return pokemonsAPI.getPokemonData(p.name)
    }))
    dispatch(setPokemonsInfo(pokeInfo))
}
export const LoadMore = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await pokemonsAPI.getPokemonData()
    dispatch(setPokemonsInfo(data.results))
    dispatch(toggleIsFetching(false))

}

export default pokemonsReducer