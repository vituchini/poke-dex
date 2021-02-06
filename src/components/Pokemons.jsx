import React from 'react';
import Pokemon from "./Pokemon";
import Preloader from "./common/Preloader/Preloader";

function Pokemons(props) {
    return (
        <div>
            {props.pokemons.map(p => {
                    return <Pokemon key={p.id} pokemon={p} setCurrentPokemon={props.setCurrentPokemon}/>
                }
            )}
            {props.isNewPokemonsLoading
                ?<Preloader/>
                :<button onClick={()=>{props.loadMore(props.next)}}>Load More</button>
            }
        </div>
    );
}

export default Pokemons;