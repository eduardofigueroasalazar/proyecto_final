import React, {Component} from 'react';
import '../estilos/style.css';
import { ApiGeneracion } from "../lib/PokeApi";

class PokemonPorTiempo extends Component{
    constructor(props){
        super(props)
        localStorage.setItem("idPokemonTiempo","")
        localStorage.setItem("namePokemonTiempo","")
        localStorage.setItem("spritePokemonTiempo","")
        localStorage.setItem("spriteShinyPokemonTiempo","")
        this.state = {
            contador: 151,
            idPokemonTiempo: '',
            namePokemonTiempo: '',
            spritePokemonTiempo: '',
            spriteShinyPokemonTiempo: '',
        }
    }

    

    componentDidMount(){
        this.intervalo = setInterval(()=> {
            this.fetchInformacionPokemon(this.state.contador)
            this.setState({
                contador: this.idPokemonAleatorio(),
                idPokemonTiempo: localStorage.getItem("idPokemonTiempo"),
                namePokemonTiempo: localStorage.getItem("namePokemonTiempo"),
                spritePokemonTiempo: localStorage.getItem("spritePokemonTiempo"),
                spriteShinyPokemonTiempo: localStorage.getItem("spriteShinyPokemonTiempo"),
            })
            
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalo)
    }

    fetchInformacionPokemon = async (idPokemon) => {
        const respuesta                 = await ApiGeneracion.getPokemonInformacion(idPokemon)
        const { data: dataRespuesta }   = respuesta;
        console.log(respuesta.data.id)
        localStorage.setItem("idPokemonTiempo", respuesta.data.id)
        localStorage.setItem("namePokemonTiempo", respuesta.data.name)
        localStorage.setItem("spritePokemonTiempo", respuesta.data.sprites.front_default)
        localStorage.setItem("spriteShinyPokemonTiempo", respuesta.data.sprites.front_shiny)
    }

    idPokemonAleatorio = () => {
        const idPokemonAleatorio = Math.round(Math.random() * (1118 - 1) + 1);
        return idPokemonAleatorio;
    }

    render(){
        const { contador , idPokemonTiempo , namePokemonTiempo, spritePokemonTiempo, spriteShinyPokemonTiempo} = this.state;
        
        return(
            <div>
                <div className="Ficha__img">
                    <img src={spriteShinyPokemonTiempo}/>
                </div>
                <div>
                <audio controls autoplay
                    src= "https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/vvdpydwp/101-opening.mp3">
                </audio>
                </div>
            </div>
        )
    }
}

export default PokemonPorTiempo;