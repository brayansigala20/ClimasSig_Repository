import { AGREGAR_PRODUCTOS_EXITO, 
    OBTENER_PRODUCTOS_INICIO } from "../types"

const initialState = {
    productos: []
}

export default function(state = initialState, action){
    switch(action.type){
        case OBTENER_PRODUCTOS_INICIO:
            
        case AGREGAR_PRODUCTOS_EXITO:
            return{
                ...state,
                productos:action.payload
            }
default:
    return state

    }
    
}