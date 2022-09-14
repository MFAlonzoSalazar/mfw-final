import { Container, Row, Col, Image } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="text-center">
      <Row className='align-items-center pb-5 pt-md-5 border-bottom'>
        <Col className="order-2 col-12 order-md-1 col-md-6 text-md-end">
            I'm a software engineer that wants to specialize in web and app development
        </Col>
        <Col className='d-flex order-1 col-12 order-md-1 col-md-6 py-5 justify-content-center'>
            <div className="fer bg-primary rounded-circle p-1 ">
                <Image
                    className="fer p-3"
                    src={process.env.PUBLIC_URL + "/images/FER.jpg"}
                    alt="Fernanda Blaise Picture"
                    fluid
                    thumbnail
                    roundedCircle
                />
            </div>
            
        </Col>
      </Row>
      <Row>
        <h1 className='pt-5'> Project Preview </h1>

      </Row>
    </Container>
  );
}
