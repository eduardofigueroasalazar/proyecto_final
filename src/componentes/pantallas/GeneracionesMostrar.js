import React from 'react';
import FichaDePokemon from '../ficha/fichaPokemon';

const GeneracionesMostrar = ({pokemonesGeneracion = []}) => pokemonesGeneracion.length ? (
    <div className = 'grid-container'>
                    {
                        pokemonesGeneracion.map((pokemonesGeneracionLista, i) => {
                            return <FichaDePokemon key = {`${i}_${pokemonesGeneracionLista.id}`} pokemon = {pokemonesGeneracionLista}></FichaDePokemon>
                        })
                    }
                    </div>
) : <h1>No hay información.</h1>


export default GeneracionesMostrar;