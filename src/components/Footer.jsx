import logoClimas from '../configs/img/logoClimas.png'

const Footer = () => {
  return (
    <div className='  md:flex w-full py-6 bg-gray-600  justify-around '>
      <div><img  width={100} height={300}  src={logoClimas} alt="logoClimas" /></div>
      
        <div className=''>
             
            <h1 className="mb-2 text-amber-500 text-2xl font-bold">Redes</h1>
             <ul>
                <li className=" font-light text-xl text-gray-300 hover:text-amber-500">facebook</li>
                <li className=" font-light text-xl text-gray-300 hover:text-amber-500">linkedin</li>
                <li className=" font-light text-xl text-gray-300 hover:text-amber-500">whatsapp</li>
                <li className=" font-light text-xl text-gray-300 hover:text-amber-500">Telefono</li>
             </ul>
            
        </div>

        <div className=" w-2/6">
            <h1 className="text-2xl font-bold  text-amber-500 mb-2">Nosostros</h1>
            <p className="text-xl text-gray-300 font-light"> Empresa dedicada a la venta y manofactura de 
                                                                refaciones/productos 100% garantizados</p>
        </div>
        
        <div className="w-1/6">
            <h3 className="text-2xl font-bold  text-amber-500 mb-2">Direccion</h3>
            <p className='text-xl text-gray-300 font-light'>Av. Terrazas 11-C Col.Lotes Urbanos 33038 Delicias Chih. Mex.</p>
        </div>


    </div>
  )
}

export default Footer