import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
<header>
      <img src="/images/logoponce.png" alt="Logo" className="logo" />

      <nav className="nav-center">
        <Link className="nav" to="/">Inicio</Link>
        <Link className="nav" to="/lenceria">Lencería</Link>
        <Link className="nav" to="/vestidos">Vestidos de Baño</Link>
        <Link className="nav" to="/todo">Otros</Link>
        <Link className="nav" to="/contacto">Contacto</Link>
      </nav>

      <Link className="contacto" to="/login"> 
       Administrar<FaHeart className="heart-icon" />
      </Link>
    </header>
  )
}

export default Header