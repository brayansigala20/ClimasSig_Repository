import { Card , CardMedia, CardContent, CardActionArea } from "@mui/material"




const Productos = ({producto}) => {

  
  return (
    <div className=" m-5">
      <Card className="p-3 hover:shadow-2xl hover:bg-gray-50 ">
        <button onClick={()=> console.log('hola')}>
        <CardMedia 
         component={'img'}
         alt={`imagen`}
         image={`assets/img/${producto.imagen}`}
         height={'250'}
          
        />
        <CardContent className=" text-start">
             <h1 className="capitalize text-lg font-normal">{producto.descripcion}</h1>
             <h2 className="capitalize text-xl font-normal">{producto.marca}</h2>
             <h2 className="capitalize text-2xl font-bold">{producto.año}</h2>
             

        </CardContent>
        
        </button>
        
       

      </Card>

    </div>
  )
}

export default Productos