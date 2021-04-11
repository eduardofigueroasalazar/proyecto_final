import { React, Component } from 'react';
import { ApiGeneracion } from "../lib/PokeApi";
import GeneracionesMostrar from "../pantallas/GeneracionesMostrar";
import ComboboxTipos from "../pantallas/ComboboxTipos";
import PropType from 'prop-types';
import InformacionPokemon from '../ficha/InformacionPokemon';
export default class PokemonesTodos extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            informacionPokemones: [],
            tipos: [],
            tipoSeleccionado: '',
            cantidad: [],
            tipoPokemon: [],
        }
    }

    componentDidMount(){
        this.obtenerTipos()
    }

    callback = () => {
        const { onCall }                        = this.props;
        const { tipos}    = this.state;
        onCall(tipos);
    }

    obtenerTodosLosPokemones = async () => {
        this.setState({ tipoPokemon: []});
        const respuesta                 = await ApiGeneracion.getTodosLosPokemon()
        const { data: dataRespuesta }   = respuesta;
        const pokemones                 = dataRespuesta.results || [];
        this.setState({ informacionPokemones: []});
        pokemones.map(({name},index) =>(
            this.obtenerInformacionDePokemones(name)
        ))
    }

    cuentaLosTipos = (tipos = []) =>{
        const { tipoSeleccionado }      = this.state;
        const encontrado                = tipos.filter(item => {
            return item = tipoSeleccionado;
        })
    }

    agregarTipos = (name = '') => {
        const { tipoSeleccionado, tipoPokemon}      = this.state;
        tipoPokemon.push(name)
        this.setState({ tipoPokemon: tipoPokemon});
    }

    filtrarPokemonTipo = () => {
        const { tipoPokemon, tipoSeleccionado } = this.state;
        var indice      = 0;
        var contador    = 0;
        for(indice = 0; indice<tipoPokemon.length;indice++){
            if(tipoPokemon===tipoSeleccionado){
                console.log("if: "+tipoPokemon)
                contador++
            }else{
                console.log("else: "+tipoPokemon)
            }
        }
        console.log(contador)
    }

    obtenerInformacionDePokemones = async (nombre) =>{
        const respuesta                 = await ApiGeneracion.getPokemonInformacion(nombre);
        const informacionPokemon        = respuesta.data
        const tiposDelPokemon           = informacionPokemon.types.map(({type},index) =>{
                this.agregarTipos(type.name)
                return type.name;
            }
        )
    }

    obtenerTipos = async () =>{
        const respuesta                 = await ApiGeneracion.getTodosLosTipos();
        const { data: dataRespuesta }   = respuesta;
        const tipos                     = dataRespuesta.results || [];
        this.setState({ tipos: tipos}, this.callback);
    }
    
    onChangeTipo = ({ target: { value: tipoSeleccionado }}) => {
        this.setState({ tipoSeleccionado: tipoSeleccionado })
        this.filtrarPokemonTipo()
    }

    render(){
        const { tipos, informacionPokemones, tipoSeleccionado, tipoPokemon }      = this.state;
        
        return(
            <div>
                <div className = "btn">
                    <button  onClick={() => {this.obtenerTodosLosPokemones()}}>
                        Cargar Pokémones
                    </button>
                    <div>
                        {tipoSeleccionado}
                    </div>
                </div>
                <ComboboxTipos              tipos               = { tipos } onChange = {this.onChangeTipo} selected = { tipoSeleccionado }/>
                <InformacionPokemon         informacionPokemon  = {tipoPokemon}></InformacionPokemon>
            </div>
        )
    }
}

PokemonesTodos.props = {
    onCall: PropType.func,
}

PokemonesTodos.defaultProps = {
    onCall: () => {},
}