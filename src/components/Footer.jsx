import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        <div className="footer-links">
            <a href="/privacy-policy">Política de Privacidad</a>
            <a href="/terms-conditions">Términos y Condiciones</a>
        </div>
    </div>
</footer>
  )
}

export default Footer