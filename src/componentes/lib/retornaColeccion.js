export const getFormatoPokemonPorGeneracion = (
    informacionGeneracion   = [],
    type                    = '',

) => ({
    id: type,
    data: informacionGeneracion.map(
        informacionGeneracion => ({})
    )
})

