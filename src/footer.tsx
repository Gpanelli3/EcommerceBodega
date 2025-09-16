// Footer.tsx
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
   <footer className="bg-light mt-5 pt-5 pb-3" id="contacto">
  <Container>
    <Row className="justify-content-center g-4">

      {/* Ubicación */}
      <Col md={4} lg={3} className="mb-3">
        <div className="card shadow-sm border-0 h-100 text-center">
          <div className="card-body">
            <h5 className="card-title mb-3">Ubicación</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.671200859779!2d-68.3859833!3d-34.587185299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679093b6b0ad4db%3A0xa6b1e5b44caf64c3!2sBodega%20La%20Regalona!5e0!3m2!1ses-419!2sar!4v1757443287262!5m2!1ses-419!2sar"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Col>

      {/* Contacto */}
      <Col md={4} lg={3} className="mb-3">
        <div className="card shadow-sm border-0 h-100 text-center">
          <div className="card-body">
            <h5 className="card-title mb-3">Contacto</h5>
            <p className="mb-2">
              <a className="text-dark text-decoration-none">
                Email: panelli10@yahoo.com
              </a>
            </p>
            <p className="mb-0">Teléfono: 2604318383</p>
            <p className="mb-0">Teléfono: 2604040590</p>
          </div>
        </div>
      </Col>

      {/* Enlaces */}
      {/* <Col md={4} lg={3} className="mb-3">
        <div className="card shadow-sm border-0 h-100 text-center">
          <div className="card-body">
            <h5 className="card-title mb-3">Consultas generales</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a className="text-dark text-decoration-none">Política de privacidad</a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">Derecho de arrepentimiento</a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">Términos y condiciones</a>
              </li>
            </ul>
          </div>
        </div>
      </Col> */}

    </Row>

    {/* Footer Bottom */}
    <Row className="mt-4">
      <Col className="text-center">
        <p className="mb-1 text-muted small">
          © Familia Panelli | Prohibida la venta de alcohol a menores de 18 años
        </p>
        <p className="mb-0 text-muted small">
          Horario de atención: Lun a Vie de 7 a 15 hs. Sábados de 8 a 12
        </p>
      </Col>
    </Row>
  </Container>
</footer>


  );
}
