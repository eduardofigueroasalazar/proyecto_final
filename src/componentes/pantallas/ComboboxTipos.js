import { FormControl, InputLabel, Select } from '@material-ui/core'
import '../estilos/style.css'
import traduccionTipo from '../ficha/traduccionTipo';

const ComboboxTipos = ({ tipos = {}, onChange = () => {}, tipoSeleccionado, }) => Object.entries(tipos).length
    ?(
        <div className="combobox">
            <FormControl variant="filled">
                <InputLabel htmlFor="filled-age-native-simple">Listado</InputLabel>
                <Select
                native
                value       = { tipoSeleccionado }
                onChange    = { onChange }
                >
                    <option aria-label="None" value="">Seleccione tipo</option>
                    {
                        tipos.map(({name},index) =>(
                            <option key={`${name}_${index}`} value={name}>{traduccionTipo[name]}</option>
                        ))
                    }
                </Select>
                <> 
                
                </>
            </FormControl>
        </div>
    )
    :null


export default ComboboxTipos;