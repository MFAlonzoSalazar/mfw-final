import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { StyledText } from "../StyledComponents";
import MyCarousel from "./MyCarousel";
export default function AboutMe() {
  return (
    <Container className="text-start">
      <Row className="py-5 px-5 ">
        <h1 className="pt-3 serious">Education</h1>
        <StyledText className="py-3">
          Hi! My name is Fernanda and I love creating websites and apps. My
          interest in software development started 2016 when I graduated high
          school. I attended college at the University of California - San
          Diego, and I graduated in 2021 with my B.S in Computer Science. During
          my time at UCSD, I had the privelege of taking an intro course to
          websites. That is what kickstarted my love for web development.
        </StyledText>
        <StyledText>
          After college, my interest in websites grew, and that led me to enroll
          in Bitwise courses. I took their Mobile Friendly, Javascript, and React
          Websites courses. I hope to continue learning more about web/app development, 
          and to continue growing into a full stack developer
        </StyledText>
      </Row>
      <Row className="py-5 px-5 border-top">
        <h1 className="pt-3 serious">Work</h1>
        <StyledText>
            <b>October 2022 - Present : TA for Bitwise Industries</b>
        </StyledText>
        <StyledText>Responsibilities:</StyledText>
        <ol className="px-5">
            <li>
              Provided one-on-one assistance to struggling students
            </li>
            <li>
              Aided in both teacher and student success
            </li>
            <li>
              Monitored and recorded attendance  
            </li>
        </ol>
        <StyledText>
            <b>2014-2021: Smiles and Teeth Dental Office :</b>
        </StyledText>
        <StyledText>Responsibilities:</StyledText>
        <ol className="px-5">
            <li>
              Set up office network wiring and network sharing
            </li>
            <li>
              Created office forms in Word and Adobe Acrobat   
            </li>
            <li>
              Created patient files and billed insurances (e-claims) using Open Dental Software     
            </li>
            <li>
              Kept the System and Network up and running
            </li>
        </ol>
      </Row>
      <Row className="d-flex justify-content-center py-5 px-5 border-top">
        <h1 className="py-3 serious">Personal</h1>
        <Row className="d-flex justify-content-start mb-4">
          <Col className="d-flex justify-content-start col-12 col-lg-3 col-md-4">
            <MyCarousel />
          </Col>
          <Col className="d-flex col-12 col-lg-7 col-md-6 text-start align-items-center">
            <StyledText>
                On the left is my little software engineer family. My
                husband and I actually met in junior college on our way
                to UCSD (me) and UCI (him) for our CS degrees. Our pets 
                are honorary members because they are always at our 
                desks when we are working on projects. Our Shih Tzu is 
                Wiggles and our English Bulldog is Roli.

            </StyledText>
          </Col>
        </Row>
        <StyledText>
            During my free time I really enjoy going to the beach. At any
            time of the year you will find me swimming in the ocean, I just 
            love it so much. I also enjoy playing with my dogs, and playing 
            board games with my family. Speaking of playing, I've recently 
            started getting really into League of League of Legends. I am 
            actually hoping to start Twitch streaming as a little side hobby  
        </StyledText>
        <StyledText className="pb-5">
            Something that I would also like to 
            do at some point is travel around the world and experience all 
            the different cultures.
        </StyledText>

        
      </Row>
    </Container>
  );
}
