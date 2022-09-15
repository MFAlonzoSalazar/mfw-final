import { useState } from "react";
import { Container, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { StyledButton, StyledText } from "../StyledComponents";
export default function ContactMe() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container className="p-5">
      <h1 className="pt-md-5 mt-md-5">Get In Touch</h1>
      <StyledText className="pt-4">
        Send me a message if you want to work together or if you just want to
        say hi!
      </StyledText>

      <Form
        action="https://formsubmit.co/f7de386e0539d64d8a701246ca3da419"
        method="Post"
        noValidate
        validated={validated}
        class="form-floating pb-5 dark-text"
        id="contactForm"
        onSubmit={handleSubmit}
      >
        {/* honeypot */}
        <input type="text" name="_honey" style={{ display: "none" }} />
        {/* disble captcha */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://mfalonzosalazar.github.io/mfw-final/#/success" />
        <Row className="g-2 py-2">
          <Col>
            <FloatingLabel controlId="floatingInputGrid" label="First Name">
              <Form.Control
                type="text"
                name="First&nbsp;Name"
                placeholder="First Name"
                required
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingInputGrid" label="Last Name">
              <Form.Control
                type="text"
                name="Last&nbsp;Name"
                placeholder="Last Name"
                required
              />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel
          controlId="floatingEmail"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            name="Email"
            placeholder="name@example.com"
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
            as="textarea"
            name="Message"
            placeholder="Leave a message here"
            style={{ height: "200px" }}
            required
          />
        </FloatingLabel>
        <StyledButton type="submit" className="mb-5">
          Submit
        </StyledButton>
      </Form>
    </Container>
  );
}
