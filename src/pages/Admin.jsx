import Footer from "../components/Footer"
import HeaderAdmin from "../components/HeaderAdmin"
import UpLoadFile from '../components/UpLoadFile'
import { Link } from "react-router-dom"
import '../styles/Admin.css'



const Admin = () => {
    return (
        <section>
            <div><HeaderAdmin /></div>
            <div className="admin-container">
      <div className="admin-card">
        <h1 className="admin-title">¡Welcome!</h1>
        <p className="admin-text">
          Has ingresado al sistema de gestión de <strong>Tu Tienda</strong>.  
          Desde aquí, podrás administrar productos, imágenes.
        </p>
        <ul className="admin-list">
          <li>🌸 Agregar, editar o eliminar productos.</li>
          <li>🌸 Gestionar imágenes y descripciones.</li>
        </ul>

      </div>
    </div>
            

            <Footer />
        </section>

    )
}

export default Admin