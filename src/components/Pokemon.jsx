import React from 'react';
import {objectToJsx} from "../utils/object-helpers";
import s from './Pokemons.module.css'
function Pokemon({pokemon}) {
    debugger
    let p = pokemon
    return (
        <div className={s.pokemon}>
            <hr/>
            {p.name}
            <div className={s.types}>
                {p.types.map(pok=>{
                    return <div className={pok.type.name.name}>{pok.type.name}</div>
                })}
            </div>
            {/*{objectToJsx(p.types)}*/}
        </div>
    );
}

export default Pokemon;