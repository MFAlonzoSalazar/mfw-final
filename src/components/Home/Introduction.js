import { Row, Col, Image } from "react-bootstrap";
export default function Introduction() {
  return (
    <Row className="align-items-center pb-5 pt-md-5 border-bottom">
      <Col className="d-flex col-12 col-md-4 py-5 justify-content-center">
        <Image
            className="p-3 border border-4  "
            src={process.env.PUBLIC_URL + "/images/FER.jpg"}
            alt="Fernanda Blaise Picture"
            fluid
            thumbnail
            roundedCircle
        />
      </Col>
      <Col className="col-12 col-md-8 text-md-start px-5">
        <p className="intro blockquote"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
        quis exercitationem culpa nesciunt nihil aut nostrum explicabo
        reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
        Voluptatum ducimus voluptates voluptas?</p>
      </Col>
    </Row>
  );
}
