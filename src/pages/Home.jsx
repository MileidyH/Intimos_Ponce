import Footer from "../components/Footer"
import Header from "../components/Header"
import UpLoadNew from "../components/UpLoadNew"
import '../styles/Home.css'
import NewCollection from "./NewCollection"

const Home = () => {
  return (
    <section>
      <Header />
      <div className="home-container">
        <div className="home-images">
          <img src="/images/modelo1.png" alt="Modelo 1" className="home-image" />
          <img src="/images/IT.jpg" alt="Banner Íntimos Ponce" className="home-image banner" />
          <img src="/images/modelo2.png" alt="Modelo 2" className="home-image" />
        </div>
        <div className="home-text">
          <h2>Descubre Nuestra Nueva Colección</h2>
          <p>
            Elegancia, comodidad y sensualidad se unen en nuestra última colección de lencería y ropa interior.
          </p>
          <NewCollection />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Home