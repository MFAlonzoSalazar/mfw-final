import { Container } from "react-bootstrap";
import { StyledText } from "../StyledComponents";
export default function Success() {
    return(
        <Container className="p-5">
            <h1 className="pt-md-5 mt-md-5">Get In Touch</h1>
            <StyledText className="py-4">
                Success! I'll get back to you within 48 hours
            </StyledText>
        </Container>
    );
}