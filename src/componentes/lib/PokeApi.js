import axios from 'axios';

const baseApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const ApiGeneracion = {
    getGeneraciones: () => baseApi({
       method: 'GET',
       url: '/generation/'
    }),
    getPokemonPorGeneracion: (idGeneracion) => baseApi({
        method: 'GET',
        url: idGeneracion
    }),
    getPokemonInformacion: (nombre) => baseApi({
        method: 'GET',
        url: `/pokemon/${nombre}`
    }),
    getTodosLosPokemon: () => baseApi({
        method: 'GET',
        url: '/pokemon/?offset1=&limit=1118'
    }),
    getTodosLosTipos: () => baseApi({
        method: 'GET',
        url: '/type/'
    })
}

