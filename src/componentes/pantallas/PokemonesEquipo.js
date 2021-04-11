import { React, Component } from 'react';
import { ApiGeneracion } from "../lib/PokeApi"
import GeneracionesMostrar from "../pantallas/GeneracionesMostrar";

export default class PokemonesEquipo extends Component{
    constructor(props){
        super(props)

        this.state = {
            pokemonesEquipo: [],
        }
    }

    componentDidMount(){
        this.obtenerEquipoPokemon()
    }

    obtenerEquipoPokemon = () => {
        this.setState({ pokemonesEquipo: []});
        if(localStorage.getItem("miEquipo") != null){
            const miEquipo = JSON.parse(localStorage.getItem('miEquipo'))
            miEquipo.forEach(
                nombrePokemonEquipo => 
                this.fetchInformacionPokemon(nombrePokemonEquipo)
            )
        }
        
        
    }

    fetchInformacionPokemon = async (nombrePokemon) => {
        const respuesta                 = await ApiGeneracion.getPokemonInformacion(nombrePokemon)
        const { data: dataRespuesta }   = respuesta;
        const { pokemonesEquipo }       = this.state;
        pokemonesEquipo.push(respuesta.data)
        this.ordenamientoListaPokemon(pokemonesEquipo)
        this.setState({ pokemonesEquipo: pokemonesEquipo});
    }

    ordenamientoListaPokemon = (pokemonesGeneracion = []) => {
        const listaOrdenadaPokemon = pokemonesGeneracion.sort(function (a, b) {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          })
        return listaOrdenadaPokemon;
    }

    listarEquipo = () =>{
        const miEquipo              = JSON.parse(localStorage.getItem('miEquipo'))
        const miEquipoListado       = miEquipo.reduce((acumulador, item) =>{
                return acumulador + ' ' + item.charAt(0).toUpperCase() + item.slice(1);
        },'')
        alert("Tu equipo esta conformado por: "+miEquipoListado)
    }

    render(){
        const { pokemonesEquipo }           = this.state;
        return(
            <> 
            <div className = "btn">
                    <button  onClick={() => {this.obtenerEquipoPokemon()}}>
                        Cargar equipo
                    </button>
                    <button  onClick={() => {this.listarEquipo()}}>
                        Listar equipo
                    </button>
            </div>
            <GeneracionesMostrar        pokemonesGeneracion = { pokemonesEquipo }></GeneracionesMostrar>
            </>
        )

   }
}