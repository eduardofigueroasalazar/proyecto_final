import React from 'react';
import LogoApp from '../imagenes/pokemonlogo.png';
import  '../estilos/style.css';

class AppHeader extends React.Component{
    render(){
        return(
            <div className = "header" style = {{backgroundColor: '#92a8d1'}}>
                <img alt = "header" className = "logo" src = {LogoApp}></img>
                <p>Pokemon Go API</p>
            </div>
        )
    }
}

export default AppHeader;