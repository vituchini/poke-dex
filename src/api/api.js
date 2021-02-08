import * as axios from "axios";

const instance = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/',
    },
);

export const pokemonsAPI = {
    getPokemons(count = 12) {
        return instance.get(`pokemon/?limit=${count}`)
            .then(res => {
                return res.data
            })
    },
    getNewData(url) {
        return axios.get(url)
            .then(res => {
                return res.data
            })
    },
    getTypes() {
        return instance.get(`type`)
            .then(res => {
                return res.data
            })
    },

}
