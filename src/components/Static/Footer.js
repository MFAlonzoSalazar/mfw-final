import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <Container className="footer border-top py-2" fluid>
      <Row className="d-flex px-md-5 mx-md-5 align-items-center">
        <Col className="col-4  d-flex gap-2 gap-md-3">
          <i className="bi bi-instagram fs-4 pink"></i>
          <i className="bi bi-twitch fs-4 pink"></i>
          <i className="bi bi-github fs-4 pink"></i>
          <i className="bi bi-linkedin fs-4 pink"></i>
        </Col>
        <Col className="col-8  text-end">
            <div class='fs-5 fw-bold pink'> &copy; Fernanda Blaise 2022 </div> 
        </Col>
      </Row>
    </Container>
  );
}
