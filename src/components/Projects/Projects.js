import { Container, Image } from "react-bootstrap";
import { StyledText, StyledA } from "../StyledComponents";
export default function Projects() {
  return (
    <Container className="text-center p-5" fluid>
      <StyledText>
        To check out the websited please click on the bolded names 
      </StyledText>
      <Container className="projectSection p-md-5">
        <Image
          className="projectImg d-block p-md-2 border border-4"
          src={process.env.PUBLIC_URL + "/images/EventPage.png"}
          alt="First slide"
          thumbnail
        />
        <div className="projectText bg-primary p-1 p-md-3 mt-2 mb-4 rounded-3 shadow dark-text">
          <h6 className="pt-1">
            <StyledA
              href="https://mfalonzosalazar.github.io/react_final_proj/"
              target="_blank"
              className="fw-bolder"
            >
              Fakestore
            </StyledA>
          </h6>
          <StyledText>
            Fakestore is a mockup of a store webpage. It hosts all its
            functionality on the front end. You can view products, add them to
            the cart, view them in the cart, see your subtotal, and check out.
          </StyledText>
        </div>
      </Container>

      <Container className="projectSection p-md-5">
        <Image
          className="projectImg d-block p-md-2 border border-4"
          src={process.env.PUBLIC_URL + "/images/EventPage.png"}
          alt="First slide"
          thumbnail
        />
        <div className="projectText bg-primary p-1 p-md-3 mt-2 mb-4 rounded-3 shadow dark-text">
          <h6 className="pt-1">
            <StyledA
              href="https://mfalonzosalazar.github.io/event-landing-page/"
              target="_blank"
              className="fw-bolder"
            >
              EventPage
            </StyledA>
          </h6>
          <StyledText>
            This page is a mockup for an event. It showcases my work with
            bootstrap. Specifically it shows image cards, breakpoints
            (to make it mobile friendly), responsive images, etc.
          </StyledText>
        </div>
      </Container>

      <Container className="projectSection p-md-5">
        <Image
          className="projectImg d-block p-md-2 border border-4"
          src={process.env.PUBLIC_URL + "/images/MovieSearch.png"}
          alt="First slide"
          thumbnail
        />
        <div className="projectText bg-primary p-1 p-md-3 mt-2 mb-4 rounded-3 shadow dark-text">
        <h6 className="pt-1">
            <StyledA
              href="https://mfalonzosalazar.github.io/movie_app_take_home/"
              target="_blank"
              className="fw-bolder"
            >
              MovieSearch
            </StyledA>
          </h6>
          <StyledText>
            This is the first ever website I made with React. It is a website to search for
            movies to watch. You can type any name and it will come up with 10 movies from
            IMDB that match up to that name.
          </StyledText>
        </div>
      </Container>

      <Container className="projectSection p-md-5 mb-5">
        <Image
          className="projectImg d-block p-md-2 border border-4"
          src={process.env.PUBLIC_URL + "/images/ComingSoon.png"}
          alt="First slide"
          thumbnail
        />
        <div className="projectText bg-primary p-1 p-md-3 mt-2 mb-4 rounded-3 shadow dark-text">
        <h6 className="pt-1">
            <StyledA
              href="https://mfalonzosalazar.github.io/react_final_proj/"
              target="_blank"
              className="fw-bolder"
            >
              Coming Soon
            </StyledA>
          </h6>
          <StyledText>
            My mom has a jewelry business and I will make her a website for it.
            She will be able to showcase and sell her pieces on the website
            and it will be managed by me.
          </StyledText>
        </div>
      </Container>
    </Container>
  );
}
