import React from 'react';
import '../estilos/style.css';
import typeColors from '../ficha/typeColors'
import traduccionTipo from '../ficha/traduccionTipo';
import habilidadesPokemon from '../ficha/habilidadesPokemon';

function FichaDePokemon({ pokemon }){
    
    function agregarPokemonEquipo(nombrePokemon) {
        const nombrePokemonMostrar = nombrePokemon.charAt(0).toUpperCase() + nombrePokemon.slice(1)
        if(localStorage.getItem('miEquipo') == null){
            localStorage.setItem('miEquipo', '[]')
        }
        const miEquipo          = JSON.parse(localStorage.getItem('miEquipo'))
        const pokemonEncontrado = miEquipo.indexOf(nombrePokemon)
        miEquipo.push(nombrePokemon)
        const miEquipoUnico = miEquipo.filter((valor, indice)=>{
            return miEquipo.indexOf(valor) === indice;
        })
        if(pokemonEncontrado != -1){
            alert("Pokémon "+nombrePokemonMostrar+ " ya se encuentra agregado a tu equipo.")
        }else{
            alert("Pokémon "+nombrePokemonMostrar+ " agregado a tu equipo.")
        }
        localStorage.setItem('miEquipo', JSON.stringify(miEquipoUnico))
      }

      function quitarPokemonEquipo(nombrePokemon) {
        const nombrePokemonMostrar = nombrePokemon.charAt(0).toUpperCase() + nombrePokemon.slice(1)
        if(localStorage.getItem('miEquipo') == null){
            localStorage.setItem('miEquipo', '[]')
        }
        const miEquipo = JSON.parse(localStorage.getItem('miEquipo'))
        const pokemonEncontrado = miEquipo.indexOf(nombrePokemon)
        if(pokemonEncontrado != -1){
            miEquipo.splice(pokemonEncontrado, 1)
            alert("Pokémon "+nombrePokemonMostrar+ " ha sido quitado de tu equipo.")
        }else{
            alert("Pokémon "+nombrePokemonMostrar+ " no esta en tu equipo.")
        }
        localStorage.setItem('miEquipo', JSON.stringify(miEquipo))
      }
    
    return (
        <div className="Ficha">
            <div className="Ficha__name">
                <p className="title">#{pokemon.id} {pokemon.name}</p>
            </div>
            <div className="Ficha__img">
                <img src={pokemon.sprites.front_default}/>
                <img src={pokemon.sprites.front_shiny}/>
            </div>
            <div className="Ficha__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Ficha__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {traduccionTipo[type.type.name]}
                            
                            </div>
                        )
                    })
                }
            </div>
            <div className="Ficha__info">
                <div className="Ficha__data Ficha__data--weight">
                    <p className="title">Peso</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Ficha__data Ficha__data--weight">
                    <p className="title">Altura</p>
                    <p>{pokemon.height}</p>
                </div> 

                <div className = "contenedorBotones">
                    <div className = "btn">
                        <button onClick={() => agregarPokemonEquipo(pokemon.name)}>Agregar a mi equipo.</button>
                    </div>
                    <div className = "btn">
                        <button onClick={() => quitarPokemonEquipo(pokemon.name)}>Quitar de mi equipo.</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FichaDePokemon;