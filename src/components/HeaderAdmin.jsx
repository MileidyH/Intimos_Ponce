import { Link } from "react-router-dom"

const HeaderAdmin = () => {
    return (
        <div><header>
            <img src="/images/logoponce.png" alt="Logo" className="logo" />

            <nav className="nav-center">
                <Link className="nav" to="/lenceriaAdmi">Lencería</Link>
                <Link className="nav" to="/vestidosAdmi">Vestidos de Baño</Link>
                <Link className="nav" to="/todoAdmi">Otros</Link>
                <Link className="nav" to="/newAdmin">Nueva Colección</Link>
                <Link className="nav" to="/">Cerrar Sesión</Link>
            </nav>

        </header></div>
    )
}

export default HeaderAdmin