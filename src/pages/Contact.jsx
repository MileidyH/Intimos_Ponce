import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Contact.css'
import { FaHome, FaWhatsapp, FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (
    <section >
      <Header />
    <div className="contact-container">
      <h2 className="contact-title">CONTACTO</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaHome className="contact-icon" />
          <p>Vegachí, CA 94158</p>
        </div>
        <div className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <p>+57 301 000 0000</p>
        </div>
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <p>@Intimosponce </p>
        </div>
      </div>
      <p className="contact-description">
      Diseñada con detalles delicados y telas de alta calidad, cada pieza realza tu belleza y confianza.
      </p>
      <h3 className="contact-shipping">ENVIOS A TODO EL PAÍS</h3>
      <a href="https://www.intimosponce.com" className="contact-link">
        www.intimosponce.com
      </a>
      <p className="contact-care">
        <span>Horarios</span> / Lunes - Viernes, 8:00 a.m - 5:00 p.m
      </p>
    </div>
    <Footer />
    </section>
  )
}

export default Contact