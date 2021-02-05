import React from 'react';
function Pokemon({pokemon}) {
    let p = pokemon
    return (

        <div>
            {p.name}
            <a href={p.url}>Show more</a>
        </div>
    );
}

export default Pokemon;