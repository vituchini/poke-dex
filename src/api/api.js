import * as axios from "axios";

const instance = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/',
    },
);

export const pokemonsAPI = {
    getPokemons(count) {
        return instance.get(`pokemon/?limit=${count}`)
            .then(res => {
                return res.data
            })
    },

}
