import React from 'react';
import Pokemon from "./Pokemon";

function Pokemons(props) {
    return (
        <div>
            {props.pokemons.map(p => {
                    return <Pokemon pokemon={p}/>
                }
            )}
        </div>
    );
}

export default Pokemons;