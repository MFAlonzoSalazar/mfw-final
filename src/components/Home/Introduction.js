import { Row, Col, Image } from "react-bootstrap";
export default function Introduction() {
  return (
    <Row className="align-items-center pb-5 pt-md-5 border-bottom">
      <Col className="d-flex col-12 col-md-4 py-5 justify-content-center">
        <Image
          className="p-3 border border-4"
          src={process.env.PUBLIC_URL + "/images/FER.jpg"}
          alt="Fernanda Blaise Picture"
          thumbnail
          roundedCircle
        />
      </Col>
      <Col className="col-12 col-md-8 text-md-start px-5">
        <p className="intro blockquote">
          Hi <span class="wave">👋🏽</span>, my name is Fernanda Blaise. I'm a
          software engineer interested in specializing as a full stack developer.
          I want to focus on creating beautiful and engaging websites, which are also mobile
          friendly and give a great user experience.
        </p>
      </Col>
    </Row>
  );
}
