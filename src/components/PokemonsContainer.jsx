import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getPokemons, loadMore} from "../redux/pokemons-reducer";
import Pokemons from "./Pokemons";
import Preloader from "./common/Preloader/Preloader";

function PokemonsContainer(props) {

    useEffect(() => {
        props.getPokemons(12)
    }, []);


    return (
        <div>
            {props.isPokemonsLoading
                ? <Preloader/>
                : <Pokemons {...props}/>
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonsPage.pokemons,
        isPokemonsLoading: state.pokemonsPage.isFetching,
        isNewPokemonsLoading: state.pokemonsPage.isNewPokemonsLoading,
        next:state.pokemonsPage.nextPokemonsPage
    }
}

export default connect(mapStateToProps,
    {
        getPokemons,
        loadMore
    }
)
(PokemonsContainer)