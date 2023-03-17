import { Link } from 'react-router-dom'
import '../Components/Styles/Navbar.css'
import marca from '../assets/marca.svg'

export default function Navbar() {


  return (
    <nav className="navbar__container">
      <ul className='navbar__list'>
        <li> <img className='logo_marca' src={marca} alt="" /></li>
        <li> <Link className='option' to='/' > Profile </Link> </li>
        <li> <Link className='option' to='/projects' > Projects </Link> </li>
        <li> <Link className='option' to='/services' > Services </Link> </li>
        <li> <Link className='option' to='/activites' > Activities </Link> </li>
        <li> <Link className='option' to='/more' > About me </Link> </li>
        <li> <Link className='option' to='/contact' > Contact me </Link> </li>
      </ul>
    </nav>
  )
}



