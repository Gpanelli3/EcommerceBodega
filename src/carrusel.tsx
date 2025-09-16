import Carousel from "react-bootstrap/Carousel";
//import bod2 from "./assets/bod2.jpg";
import bod3 from "./assets/bod3.jpg";

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100"
          src={bod3}
          alt="First slide"
          style={{
            width: "clamp(200px, 50%, 600px)", // mínimo 200px, ideal 50% del contenedor, máximo 600px
            height: "auto", // mantiene proporción
            objectFit: "contain",
            display: "block",
            margin: "0 auto", // centra la imagen
          }}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100"
          src={bod3}
          alt="Second slide"
          style={{
            width: "clamp(200px, 50%, 600px)", // mínimo 200px, ideal 50% del contenedor, máximo 600px
            height: "auto", // mantiene proporción
            objectFit: "contain",
            display: "block",
            margin: "0 auto", // centra la imagen
          }}
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100"
          src={bod3}
          alt="Third slide"
          style={{
            width: "clamp(200px, 50%, 600px)", // mínimo 200px, ideal 50% del contenedor, máximo 600px
            height: "auto", // mantiene proporción
            objectFit: "contain",
            display: "block",
            margin: "0 auto", // centra la imagen
          }}
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
