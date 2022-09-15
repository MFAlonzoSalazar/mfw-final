import { Container } from "react-bootstrap";
import { StyledText } from "../StyledComponents";
export default function ContactMe() {
    return(
        <Container className='border-top p-5'>
            <h1>Get In Touch</h1>
            <StyledText>If you want to work together or just want to say hi</StyledText>
        </Container>
    );
}