import React, { Component } from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { ApiGeneracion } from '../lib/PokeApi';

class PokemonPorGeneracion extends Component{

    constructor(props){
        super(props)

        this.state = {
            generaciones: []
        }
    }

    callback = () => {
        const { onCall }            = this.props;
        const { generaciones }      = this.state;
        onCall(generaciones);
    }

    fetchGeneraciones = async () => {
      
        const respuesta = await ApiGeneracion.getGeneraciones()
        const { data: dataRespuesta } = respuesta;
        const generaciones = dataRespuesta.results || [];
        this.setState({ generaciones }, this.callback)
    }

    render(){
  
        return(
            <div>
              <FormControl variant="filled">
                <InputLabel htmlFor="filled-age-native-simple">Generaciones</InputLabel>
                <Select native>
                <option aria-label="None" value="">Seleccione generación</option>
                    {
                        this.generaciones.map(({name,url},index) =>(
                            <option key={`${url}_${name}_${index}`} value={url}>{name}</option>
                        ))
                    }
                </Select>
            </FormControl>
            </div>
        );
    }
}

export default PokemonPorGeneracion;
