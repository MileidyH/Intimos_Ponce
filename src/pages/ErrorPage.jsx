import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>¡Oops! Página no encontrada</h1>
      <p>La página que buscas no existe o fue movida.</p>
      <Link to="/error" style={{ color: 'blue', textDecoration: 'underline' }}>
        Volver al inicio
      </Link>
    </div>
  );
}
