import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../estilos/style.css'

const InformacionPokemon = ({ informacionPokemon = {}}) => Object.entries(informacionPokemon).length
    ?(
        
    <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                   <h>Cantidad de Pokémones por tipo:</h> {informacionPokemon.length}
                </Typography>
        </CardContent>
    </Card>
    )
    :<h3>Sin información.</h3>


export default InformacionPokemon;
