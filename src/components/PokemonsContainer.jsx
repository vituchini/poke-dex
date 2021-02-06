import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getPokemons, loadMore, setCurrentPokemon} from "../redux/pokemons-reducer";
import Pokemons from "./Pokemons";
import Preloader from "./common/Preloader/Preloader";
import PokemonInfo from "./PokemonInfo";
import s from './Pokemons.module.css'

function PokemonsContainer(props) {

    useEffect(() => {
        props.getPokemons(12)
    }, []);
    return (
        <div>
            {props.isPokemonsLoading
                ? <Preloader/>
                : <div className={s.pokemonsBlock}>
                    <Pokemons {...props}/>
                    <PokemonInfo pokemon={props.pokemons.find(p => {
                        return p.id === props.currentPokemon

                    })}/>
                </div>

            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonsPage.pokemons,
        isPokemonsLoading: state.pokemonsPage.isFetching,
        isNewPokemonsLoading: state.pokemonsPage.isNewPokemonsLoading,
        next: state.pokemonsPage.nextPokemonsPage,
        currentPokemon: state.pokemonsPage.currentPokemon
    }
}

export default connect(mapStateToProps,
    {
        getPokemons,
        loadMore,
        setCurrentPokemon
    }
)
(PokemonsContainer)