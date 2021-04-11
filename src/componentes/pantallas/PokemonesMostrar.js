import React, { useState, useEffect } from 'react';
import { obtenerTodosLosPokemones , obtenerPokemon} from '../lib/pokemon';
import FichaDePokemon from '../ficha/fichaPokemon';
import imagenCargando from '../imagenes/cargando.gif';

function MostrarPokemonInformacion(){
    const [informacionPokemon,  setInformacionPokemon]          = useState([]);
    const [siguienteUrl,        setSiguienteUrl]                = useState('');
    const [anteriorUrl,         setAnteriorUrl]                 = useState('');
    const [cargaPagina,         setCargaPagina]                 = useState(true);
    const urlApiPokemon                                         = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {
        async function fetchInformacion() {
            const respuesta = await obtenerTodosLosPokemones(urlApiPokemon);
            setSiguienteUrl(respuesta.next);
            setAnteriorUrl(respuesta.previous);
            const pokemon = await cargandoPokemon(respuesta.results)
            setCargaPagina(false);
        }
        fetchInformacion();
    }, []);

    const siguientePagina = async () => {
        setCargaPagina(true)
        const informacion = await obtenerTodosLosPokemones(siguienteUrl)
        await cargandoPokemon(informacion.results)
        setSiguienteUrl(informacion.next);
        setAnteriorUrl(informacion.previous);
        setCargaPagina(false)
    }

    const anteriorPagina = async () => {
        if (!anteriorUrl) return;
        setCargaPagina(true)
        const informacion = await obtenerTodosLosPokemones(anteriorUrl)
        await cargandoPokemon(informacion.results)
        setSiguienteUrl(informacion.next);
        setAnteriorUrl(informacion.previous);
        setCargaPagina(false)
    }

    const cargandoPokemon = async informacion => {
        const _informacionPokemon            = await Promise.all(
                informacion.map(async pokemon => {
                const registroPokemon = await obtenerPokemon(pokemon.url);
                return registroPokemon;
        }));

        setInformacionPokemon(_informacionPokemon);

    };

    return(
        <div>
            { cargaPagina ? <h1> <img src = {imagenCargando} className = "cargandoPokemon"></img> Cargando registros</h1> : (
                <>
                    <div className = "btn">
                        <button onClick = {anteriorPagina}>
                            Anterior
                        </button>
                        <button onClick = {siguientePagina}>
                            Siguiente
                        </button>
                    </div>
                    <div className = 'grid-container'>
                    {
                        informacionPokemon.map((pokemon, i) => {
                            return <FichaDePokemon key = {i} pokemon = {pokemon}></FichaDePokemon>
                        })
                    }
                    </div>
                </>
            )}
        </div>
    )
}

export default MostrarPokemonInformacion;