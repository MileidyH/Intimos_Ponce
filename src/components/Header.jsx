import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Header = () => {
  
  return (
<header>
      <img src={`${import.meta.env.BASE_URL}/images/logoponce.png`} alt="Logo" className="logo" />

      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`nav-center ${isOpen ? "open" : ""}`}>
        <Link className="nav" to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
        <Link className="nav" to="/lenceria" onClick={() => setIsOpen(false)}>Lencería</Link>
        <Link className="nav" to="/vestidos" onClick={() => setIsOpen(false)}>Vestidos de Baño</Link>
        <Link className="nav" to="/todo" onClick={() => setIsOpen(false)}>Otros</Link>
        <Link className="nav" to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
      </nav>

      <Link className="contacto" to="/login" onClick={() => setIsOpen(false)}>
        Administrar <FaHeart className="heart-icon" />
      </Link>
    </header>
  )
}

export default Header