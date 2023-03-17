import name from '../assets/name.svg'
import perfil from '../assets/fondo.png'
import './styles/Home.css'


export default function Home() {

  return(
    <div className='home__container'>
      <img className='titulo__vector' src={name} alt="" />
      <div className='imagen__container'>
        <img className='imgenPerfil' src={perfil} alt="" />
      </div>
      <div className='container__text'>
        <span className='subtitle'> Desarrollador Frontend con React y React-Native </span> 
      </div>
      <button className='button__home'> Explorar </button>
    </div>
  )
} 

