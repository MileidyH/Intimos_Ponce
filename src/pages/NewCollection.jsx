import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/Lingerie.css"

const NewCollection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const q = query(collection(db, "new-collection"), orderBy("createdAt", "desc"));
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
      <div className="lingerie-container">
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
    </section>
  )
}

export default NewCollection