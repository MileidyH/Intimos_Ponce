import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/Lingerie.css"
import Header from "../components/Header";
import Footer from "../components/Footer";


const Lingerie = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const q = query(collection(db, "imagenes"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const imagesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setImages(imagesData)
    }

    fetchImages();
  }, []);

  const btnbuy = (name, price) => {
    const phoneNumber = "573128978818"; // Reemplaza con tu número de WhatsApp
    const message = `¡Wow! que linda la prenda: "${name}" ¿Está disponible?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <section>
      <Header />
      <div className="lingerie-container">
        <h2>Lencería</h2>
        <div className="lingerie-gallery">
          {images.length > 0 ? (
            images.map(image => (
              <div className="lingerie-card" key={image.id}>
                <img src={image.url} alt={image.name} className="lingerie-image" />
                <h3>{image.name}</h3>
                <p><strong> </strong>${image.price}</p>
                <button className="buy-button" onClick={() => btnbuy(image.name, image.price)}>
                  Comprar
                </button>
              </div>
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Lingerie