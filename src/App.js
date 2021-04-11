import logo from './logo.svg';
import './App.css';
import AppHeader from './componentes/headers/AppHeader';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { AppBar, Tab } from '@material-ui/core';
import { useState } from 'react';
import PokemonesMostrar from './componentes/pantallas/PokemonesMostrar';
import PokemonesMostrarFetch from './componentes/pantallas/PokemonesMostrarFetch';
import PokemonesEquipo from './componentes/pantallas/PokemonesEquipo';
import PokemonPorTiempo from './componentes/pantallas/PokemonesPorTiempo';
import PokemonesAleatorios from './componentes/pantallas/PokemonesAleatorios';
import PokemonesTodos from './componentes/pantallas/PokemonesTodos';

function App() {
  const [tabIndex, updateTabIndex] = useState('1')
  const onChangeTabIndex = (event, value) => updateTabIndex(value)
  return (
    <div className="App">
    <AppHeader/>
    <TabContext value = {tabIndex}>
      <AppBar position = "static">

        <TabList onChange = {onChangeTabIndex}>
          <Tab label = "Inicio" value = "1"></Tab>
          <Tab label = "Listado de Pokémon" value = "2"></Tab>
          <Tab label = "Pokémon por generación" value = "3"></Tab>
          <Tab label = "Tu equipo Pokémon" value = "4"></Tab>
          <Tab label = "Pokémon por tiempo" value = "5"></Tab>
          <Tab label = "Pokémon aleatorio" value = "6"></Tab>
        </TabList>

      </AppBar>

      <TabPanel value = "1">
        <p>Bienvenido a los uso de API de Pokemon GO.</p>
      </TabPanel>

      <TabPanel value = "2">
      <PokemonesMostrar/>
      </TabPanel>

      <TabPanel value = "3">
      <PokemonesMostrarFetch/>
      </TabPanel>
      <TabPanel value = "4">
      <PokemonesEquipo/>
      </TabPanel>
      <TabPanel value = "5">
      <PokemonPorTiempo/>
      </TabPanel>
      <TabPanel value = "6">
      <PokemonesAleatorios/>
      </TabPanel>
    </TabContext>
    </div>
  );
}

export default App;
