import { useEffect, useState } from "react"
import clienteAxios from "../axios"
import { useDispatch, useSelector } from "react-redux"
import {getProductosAction} from "../actions/productosAction/"
import Productos from "../components/Productos"


const HomePage = () => {
  const dispatch = useDispatch()
  const productos = useSelector(selector => selector.Productos.productos)

  const [ producto, setProducto] = useState("Compresores")



   
useEffect( ()=>{
 dispatch(getProductosAction(producto))

},[producto])

const handleProductos = (e)=>{
  e.preventDefault()

  setProducto(e.target.value)
}



  return (
    <>
    <form className="">
      <label
      className="block text-center text-5xl font-bold mb-8"
      htmlFor="">Productos mas buscados!</label>
      <div className="flex justify-center">
      <select 
      onChange={(e)=>handleProductos(e)}
      className=" border-b-2 outline-none border-red-200 w-2/3 py-3 mb-10">
        <option value="Compresores">Compresores a/c</option>
        <option value="Boilers">Boilers</option>
        <option value="Lavadoras">Lavadoras Refacion</option>
        <option value="Motores">Motores </option>
      </select>
      </div>
  
    </form>
         <div className="grid grid-cols-4">
         {productos ? productos.map(producto=> (
      <Productos
      key={producto.id}
      producto={producto}
      />
    )): <p>no hay productos</p>}
    
         </div>
    </>
    
  )
}

export default HomePage