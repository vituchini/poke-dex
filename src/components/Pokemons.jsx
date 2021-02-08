import React from 'react';
import Pokemon from "./Pokemon";
import s from './Pokemons.module.css'

function Pokemons(props) {
    let showedPokemons = props.pokemons.filter(p => {
            if (props.currentType === 'all') return true
            let types = p.types.map(pok => {
                return pok.type.name
            })
            return types.some(t => {

                    return t === props.currentType
                }
            )
        }
    ).map(p => {
            return <div key={p.id}><Pokemon pokemon={p} setCurrentPokemon={props.setCurrentPokemon}/></div>

        }
    )

    return (
        <div>
            <div className={s.pokemonsContainer}>
                {showedPokemons.length > 0
                    ? showedPokemons
                    : <></>}

            </div>
            <div>{showedPokemons.length <= 0
                ? <div className={s.noPokemons}>No Pokemon</div>
                : <></>}
            </div>
            {props.isNewPokemonsLoading
                ? <div className={s.pokemonsListBlockButton}>Loading...</div>
                : <button className={s.pokemonsListBlockButton} onClick={() => {
                    props.loadMore(props.next)
                }}>Load More</button>
            }
        </div>
    );
}

export default Pokemons;