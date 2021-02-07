import React from 'react';
import Pokemon from "./Pokemon";
import s from './Pokemons.module.css'

function Pokemons(props) {
    return (
        <div>
            <div className={s.pokemonsContainer}>
                {props.pokemons.map(p => {
                        return <Pokemon key={p.id} pokemon={p} setCurrentPokemon={props.setCurrentPokemon}/>
                    }
                )}
            </div>
            {props.isNewPokemonsLoading
                ?<div>Loading...</div>
                :<button onClick={()=>{props.loadMore(props.next)}}>Load More</button>
            }
        </div>
    );
}

export default Pokemons;