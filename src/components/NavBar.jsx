import logoClimas from '../configs/img/logoClimas.png'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useParams } from 'react-router-dom';


const NavBar = () => {
    const {data} = useParams()
    console.log(data)

    
  return (
    <nav className=''>
        <div className="flex bg-red-700 justify-around">
            

            <div className='flex items-center font-bold text-4xl text-white'>
            <img  width={125} height={300}  src={logoClimas} alt="logoClimas" />
                <Link  className=' cursor-pointer ml-10'>Climas Sigala</Link>
            </div>
            

            <div className='flex gap-6 items-center text-white'>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/catalago'}>Catalogo</Link>
                <Link to={'/sucursal'}>Sucursal</Link>
                <Link to={'/empleo'}>Empleos</Link>
            </div>

            <div className='flex w-64 items-center justify-end text-white gap-8'>
                <Link className='p-2 bg-yellow-500 rounded font-semibold'>
                Iniciar sesion
                </Link>

                <div>
                    <Link><FacebookIcon fontSize='large'/></Link> 
                    <Link className='ml-2'><LinkedInIcon fontSize='large'/></Link>
                </div>

            </div>

            
        </div>

    </nav>
  )
}

export default NavBar