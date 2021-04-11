import { Component } from "react";
import '../estilos/style.css';
import { ApiGeneracion } from "../lib/PokeApi"
import PropType from 'prop-types';
import "../estilos/style.css";
import ComboboxGeneraciones from "./ComboboxGeneraciones";
import GeneracionesMostrar from "../pantallas/GeneracionesMostrar";


export default class PokemonesMostrarFetch extends Component{
    constructor(props){
        super(props)

        this.state = {
            generaciones: [],
            generacionSelected: '',
            generacionInformacion: undefined,
            pokemonesGeneracion: [],
        }
    }

    callback = () => {
        const { onCall }            = this.props;
        const { generaciones }      = this.state;
        onCall(generaciones);
    }

    componentDidMount(){
        this.fetchGeneraciones()
    }

    fetchGeneraciones = async () => {
        const respuesta                 = await ApiGeneracion.getGeneraciones()
        const { data: dataRespuesta }   = respuesta;
        const generaciones              = dataRespuesta.results || [];
        this.setState({ generaciones }, this.callback)
    }

    fetchInformacionGeneracion = async (generacion) => {
        const respuesta                 = await ApiGeneracion.getPokemonPorGeneracion(generacion)
        const { data: dataRespuesta }   = respuesta;
        const listadoPokemonGeneracion  = dataRespuesta.pokemon_species || [];
        const listadoPokemon = []       = listadoPokemonGeneracion;
        this.setState({ pokemonesGeneracion: []});
        listadoPokemon.forEach(
            listadoDePokemones => 
            this.fetchInformacionPokemon(listadoDePokemones.name)
        )
        this.setState({generacionInformacion: listadoPokemonGeneracion})
    }

    fetchInformacionPokemon = async (nombrePokemon) => {
        const respuesta                 = await ApiGeneracion.getPokemonInformacion(nombrePokemon)
        const { data: dataRespuesta }   = respuesta;
        const { pokemonesGeneracion }   = this.state;
        pokemonesGeneracion.push(respuesta.data)
        this.ordenamientoListaPokemon(pokemonesGeneracion)
        this.setState({ pokemonesGeneracion: pokemonesGeneracion});
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

    onChangeGeneraciones = ({ target: { value: generacionSelected }}) => {
        this.setState({ generacionSelected })
        this.fetchInformacionGeneracion(generacionSelected)
    }

    render(){
        const { generaciones, generacionSelected, generacionInformacion,  pokemonesGeneracion}      = this.state;
        const { isFound }                               = generaciones.length
        
        return(
            <>  
                <div className = "btn">
                    
                    <button  onClick={() => {this.fetchGeneraciones()}}>
                        Cargar generaciónes
                    </button>
                    
                </div>
                <ComboboxGeneraciones       generaciones        = { generaciones } onChange = {this.onChangeGeneraciones} selected = { generacionSelected }></ComboboxGeneraciones>
                <GeneracionesMostrar        pokemonesGeneracion = { pokemonesGeneracion }></GeneracionesMostrar>
            </>
        )

   }
}

PokemonesMostrarFetch.props = {
    onCall: PropType.func,
}

PokemonesMostrarFetch.defaultProps = {
    onCall: () => {},
}