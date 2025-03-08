// Register.js
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase"
import { doc, setDoc } from "firebase/firestore";
import "../../styles/Register.css"
import Header from "../../components/Header";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        createdAt: new Date(),
      });

      alert("Usuario registrado exitosamente!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <div className="register-card">
          <h2 className="register-title">Registro</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Nombre"
              className="register-input"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Correo"
              className="register-input"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="register-input"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="register-button">
              Registrarse
            </button>
          </form>
          {error && <p className="register-error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;