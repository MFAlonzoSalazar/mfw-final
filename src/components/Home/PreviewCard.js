import { Col, Card } from "react-bootstrap"
import { StyledCard } from "../StyledComponents"
export default function PreviewCard({src, title, description}) {
    return (
        <Col className="d-flex col-11 col-lg-3 col-md-6 px-3">
          <StyledCard className="border-0 mb-md-5 p-2 mb-4">
            <Card.Img
              variant="top"
              src= {src}
            />
            <Card.Body className="p-0 text-center py-3">
              <Card.Title className="fw-bold">{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </StyledCard>
        </Col>
    )
}