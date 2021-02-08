import {pokemonsAPI} from "../api/api";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_POKEMONS = 'SET_POKEMONS'
const SET_NEW_POKEMONS = 'SET_NEW_POKEMONS'
const IS_NEW_POKEMONS_LOADING = 'IS_NEW_POKEMONS_LOADING'
const SET_CURRENT_POKEMON = 'SET_CURRENT_POKEMON'
const SET_ALL_TYPES = 'SET_ALL_TYPES'
const SET_CURRENT_TYPE = 'SET_CURRENT_TYPE'
let initialState = {
    isFetching: true,
    isNewPokemonsLoading: false,
    pokemons: [],
    nextPokemonsPage: '',
    currentPokemon: 1,
    types: [],
    currentType: 'all'

}
const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS: {
            return {
                ...state,
                pokemons: [...action.pokemons],
                nextPokemonsPage: action.nextPage
            }
        }
        case SET_NEW_POKEMONS: {
            return {
                ...state,
                pokemons: state.pokemons.concat(action.newPokemons),
                nextPokemonsPage: action.nextPage
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case IS_NEW_POKEMONS_LOADING: {
            return {
                ...state,
                isNewPokemonsLoading: action.isNewPokemonsLoading,
                next: action.nextPage
            }
        }
        case SET_CURRENT_POKEMON: {
            return {
                ...state,
                currentPokemon: Number(action.currentPokemon)
            }
        }
        case SET_CURRENT_TYPE: {
            return {
                ...state,
                currentType: action.currentType
            }
        }

        case SET_ALL_TYPES: {
            return {
                ...state,
                types: action.types
            }
        }

        default:
            return state
    }
}

export const setPokemons = (pokemons, nextPage) => ({type: SET_POKEMONS, pokemons, nextPage})
export const setAllTypes = (types) => ({type: SET_ALL_TYPES, types})
export const setNewPokemons = (newPokemons, nextPage) => ({type: SET_NEW_POKEMONS, newPokemons, nextPage})
export const setCurrentPokemon = (currentPokemon) => ({type: SET_CURRENT_POKEMON, currentPokemon})
export const setCurrentType = (currentType) => ({type: SET_CURRENT_TYPE, currentType})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const isNewPokemonsLoading = (isNewPokemonsLoading) => ({type: IS_NEW_POKEMONS_LOADING, isNewPokemonsLoading})

export const getPokemons = (count) => async (dispatch) => {
    dispatch(toggleIsFetching(true))

    let data = await pokemonsAPI.getPokemons(count)
    let pokeInfo = await dispatch(getPokemonsInfo(data.results))
    dispatch(setPokemons(pokeInfo, data.next))
    let allTypes = await pokemonsAPI.getTypes()
    dispatch(setAllTypes(allTypes.results))

    dispatch(toggleIsFetching(false))

}
export const getAllTypes = () => async (dispatch) => {
    return await pokemonsAPI.getTypes().results
}

export const getPokemonsInfo = (data) => async (dispatch) => {
    return await Promise.all(data.map((p) => {
        return pokemonsAPI.getPokemonData(p.name)
    }))

}
export const loadMore = (url) => async (dispatch) => {
    dispatch(isNewPokemonsLoading(true))
    let data = await pokemonsAPI.getNewData(url)
    let pokeInfo = await dispatch(getPokemonsInfo(data.results))
    dispatch(setNewPokemons(pokeInfo, data.next))

    dispatch(isNewPokemonsLoading(false))

}

export default pokemonsReducer