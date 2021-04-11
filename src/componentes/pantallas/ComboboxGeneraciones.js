import { FormControl, InputLabel, Select } from '@material-ui/core'
import '../estilos/style.css'

const ComboboxGeneraciones = ({ generaciones = {}, onChange = () => {}, selectedGeneracion }) => Object.entries(generaciones).length
    ?(
        <div className="combobox">
            <FormControl variant="filled">
                <InputLabel htmlFor="filled-age-native-simple">Listado</InputLabel>
                <Select
                native
                value       = { selectedGeneracion }
                onChange    = { onChange }
                >
                    <option aria-label="None" value="">Seleccione generación</option>
                    {
                        generaciones.map(({name,url},index) =>(
                            <option key={`${name}_${index}`} value={url}>{name}</option>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    )
    :null


export default ComboboxGeneraciones;