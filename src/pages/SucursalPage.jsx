import climas from '/assets/img/cardClimas.jpg'
import map from '/assets/img/mapClimas.jpg'
const SucursalPage = () => {
  return (
    <div className="flex justify-center ">

        <div className='shadow bg-gray-100 flex p-10 w-10/12'>
         
            <img className='p-5' width={200} height={200} src={climas} alt="climasImg" />
    

            <div className='flex flex-col justify-center p-10 '>
                 <h1 className='font-black text-4xl mb-3 w-8/12'>Donde nos ubicamos?</h1>
                 <p className=' w-8/12 font-normal text-lg'> Somos una empresa conciente en la demanda de productos
                  gracias a la calidad de los mismos, asi que estamos buscando expandirnos! </p>
            </div>

            

        </div>

      
        

        




    </div>
  )
}

export default SucursalPage