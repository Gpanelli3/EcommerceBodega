import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./assets/0012702833jpg.webp"
import img2 from "./assets/0012702872.webp"
import img3 from "./assets/0012702899.webp"
import img4 from "./assets/0012725295.webp"
import img5 from "./assets/bo.jpeg"
import img6 from "./assets/bod2.jpg"
import img7 from "./assets/bod3.jpg"



const Timeline = () => {
  const hitos = [
    {
      año: "1903",
      texto: "Casamiento de Pietro Panelli y Palmira Giorgi en Italia; nacen Primo, Armando y Lino.",
      img: img1,
    },
    {
      año: "1939–1940",
      texto: "Primo junto con Lino y Félix Panelli compran la bodega de los Camiletti, naciendo ‘Panelli Hermanos’.",
      img: img3,
    },
    {
      año: "1944",
      texto: "Armando se suma y fundan ‘Armando Panelli y Hermanos’, comienzan años fructíferos.",
      img: img4,
    },
   
    {
      año: "1968–1980",
      texto: "Crean la sociedad anónima Panelli S.A., expanden viñedos y producción.",
      img: img2,
    },
     {
      año: "Década de 1990",
      texto: "Ernesto Panelli y sus hijos inician una nueva etapa vitivinícola, continuando el fraccionamiento de vinos en la bodega fundada por la familia Piastrellini en la esquina de Zamarbide y Las Vírgenes, en Las Paredes.",
      img: img7,
    },
    {
      año: "Legado",
      texto: "Gino, Armando y Lino vivieron una vida de trabajo honesto y fecundo, dejando a sus descendientes el ejemplo de que los obstáculos se pueden vencer con energía, sacrificio y honradez.",
      img: img7,
    },
  ];

  return (
    <Container className="timeline my-5">
      <h2 className="text-center mb-5" id="timelinetitule">Historia de la familia Panelli en San Rafael</h2>
      {hitos.map((hito, index) => (
        <Row
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"} mb-5`}
        >
          <Col md={6} className="d-flex justify-content-center">
            <Image
              src={hito.img}
              alt={`Hito ${hito.año}`}
              rounded
              fluid
              className="shadow"
            />
          </Col>
          <Col md={6}>
            <div className="content p-4 shadow rounded bg-white">
              <h4>{hito.año}</h4>
              <p>{hito.texto}</p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Timeline;
