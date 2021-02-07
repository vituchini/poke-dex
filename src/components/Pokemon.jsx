import React from 'react';
import s from './Pokemons.module.css'
import {UcFirst} from "../utils/object-helpers";
function Pokemon({pokemon,setCurrentPokemon}) {
    let p = pokemon
    return (
        <div className={s.pokemonCard} onClick={()=>setCurrentPokemon(p.id)}>
            {UcFirst(p.name)}
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${p.id}.png`} alt="pokemon img"/>
            <div className={s.types}>
                {p.types.map(pok=>{
                    return <div key={pok.type.name} className={pok.type.name}>{pok.type.name}</div>
                })}
            </div>
        </div>
    );
}

export default Pokemon;