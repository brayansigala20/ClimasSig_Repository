import { 
    OBTENER_PRODUCTOS_INICIO,
    AGREGAR_PRODUCTOS_EXITO

} from "../types";
import clienteAxios from "../axios";

export const getProductosAction = (producto)=>{
   return async (dispatch)=>{
    dispatch(obtenerProductoInicio())

    try {
        const {data} = await clienteAxios(`/${producto}`)
     
        dispatch(obtenerProducto(data))
    } catch (error) {
        
    }
    


    }

}

const obtenerProductoInicio = ()=>({
    type:OBTENER_PRODUCTOS_INICIO,
 
})

const obtenerProducto = (productos)=>({
    type:AGREGAR_PRODUCTOS_EXITO,
    payload: productos
})