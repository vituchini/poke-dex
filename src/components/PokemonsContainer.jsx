import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getPokemons} from "../redux/pokemons-reducer";
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
        isPokemonsLoading: state.pokemonsPage.isFetching
    }
}

export default connect(mapStateToProps,
    {
        getPokemons,

    }
)
(PokemonsContainer)