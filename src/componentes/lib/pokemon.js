export async function obtenerTodosLosPokemones(url){
    return new Promise((resolver, rechazo) => {
        fetch(url)
        .then(respuesta     => respuesta.json())
        .then(informacion   => {
            resolver(informacion);
        })
    })
}


export async function obtenerPokemon(url){
    return new Promise((resolver, rechazo) => {
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(informacion => {
            resolver(informacion);
        })
    })
}

export async function obtenerGeneraciones(url){
    return new Promise((resolver, rechazo) => {
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(informacion => {
            resolver(informacion);
        })
    })
}