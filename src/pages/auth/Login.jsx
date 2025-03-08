import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import Header from "../../components/Header";
import "../../styles/Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
      console.log("Redirigiendo..."); // Agregar para depuración
      window.location.href = "/admin"; // Forzar redirección
    } catch (err) {
      setError("Correo o contraseña incorrectos"); 
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Correo"
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">
              Ingresar
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <p className="login-text">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="login-link">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
