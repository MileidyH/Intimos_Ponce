import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
<header>
      {/*<img src={`${import.meta.env.BASE_URL}/images/logoponce.png`} alt="Logo" className="logo" />*/}
      <img src={`${import.meta.env.BASE_URL}/images/logoponce.png`} alt="Logo" className="logo" />

      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

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