import { Row, Col, Image } from "react-bootstrap";
export default function Introduction() {
    return(
        <Row className='align-items-center pb-5 pt-md-5 border-bottom'>
        <Col className="order-2 col-12 order-md-1 col-md-6 text-md-end">
            TODO
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
    );
}