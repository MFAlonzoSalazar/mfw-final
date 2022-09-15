import { Col, Card } from "react-bootstrap"
import { StyledCard, CardTitle, CardText} from "../StyledComponents"
export default function PreviewCard({src, title, description}) {
    return (
        <Col className="d-flex col-11 col-lg-3 col-md-6 px-3">
          <StyledCard className="border-0 mb-md-5 p-2 mb-4">
            <Card.Img
              variant="top"
              src= {src}
            />
            <Card.Body className="p-0 py-3">
              <CardTitle className="fw-bold">{title}</CardTitle>
              <CardText>{description}</CardText>
            </Card.Body>
          </StyledCard>
        </Col>
    )
}