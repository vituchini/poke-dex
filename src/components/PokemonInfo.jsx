import React from 'react';
import s from './Pokemons.module.css'
import {toZeroedNumber, UcFirst} from "../utils/object-helpers";

function PokemonInfo({pokemon}) {
    let p = pokemon
    let stats = new Map()
    p?.stats.forEach(s => {
        stats.set(s.stat.name, s.base_stat)
    })
    return (
        <div className={s.pokemonInfoCard}>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${p.id}.png`} alt={p.name}/>
            <div className={s.pokemonNameInfo}>
                {UcFirst(p.name) + ' #' + toZeroedNumber(p.id, 3)}
            </div>

            <table>
                <tbody>
                <tr>
                    <td>Type</td>
                    <td>
                        {p.types.map(pok => {
                            return <div key={pok.type.name} className={pok.type.name}>{UcFirst(pok.type.name)}</div>
                        })}
                    </td>
                </tr>
                <tr>
                    <td>Attack</td>
                    <td>{stats.get('attack')}</td>
                </tr>
                <tr>
                    <td>Defense</td>
                    <td>{stats.get('defense')}</td>
                </tr>
                <tr>
                    <td>HP</td>
                    <td>{stats.get('hp')}</td>
                </tr>
                <tr>
                    <td>SP Attack</td>
                    <td>{stats.get('special-attack')}</td>
                </tr>
                <tr>
                    <td>SP Defense</td>
                    <td>{stats.get('special-defense')}</td>
                </tr>
                <tr>
                    <td>Speed</td>
                    <td>{stats.get('speed')}</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>{p.weight}</td>
                </tr>
                <tr>
                    <td>Total moves</td>
                    <td>{p.moves.length}</td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}

export default PokemonInfo;