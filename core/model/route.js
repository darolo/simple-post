/*  -- Modelo del objeto Ruta --
*   
*   Se define la estructura de los valores
*   necesarios para ejecutar un correcto
*   direccionamiento de la petición.
*
*/

module.exports = {

    /* -- Estado --
    *
    *   Valores que indican el estado 
    *   del enrutamiento.
    *   
    *   Por ejemplo si se ha encontrado
    *   alguna coincidencia con la configuración
    *   de rutas.
    *
    */
    status: {
        
    },

    /*  -- Peticion --
    *   
    *   Valores basicos de la petición.
    *   Se establecen valores por defecto.
    *   Los valores deben estar parseados para
    *   su correcto uso.
    *
    */
    req: {
        host: '', // string | null
        url: '', // string | null
        query: {}, // parse object | null
        post: {}, // parse object | null
        put: {}, // parse object | null
        "delete": '', // parse object | null
        method: '' // string [get|post|put|delete]
    },

    /*  -- Configuración --
    *
    *   Se extrae la configuración del
    *   enrutamiento.
    *
    */
    config: {},

    /*  -- Parámetros --
    *   
    *   
    *
    */
    param: {}
};