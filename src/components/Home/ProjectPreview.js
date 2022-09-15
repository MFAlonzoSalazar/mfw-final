import { Row } from "react-bootstrap";
import PreviewCard from "./PreviewCard";
export default function ProjectPreview() {
  return (
    <Row className="serious d-flex justify-content-center py-5">
      <Row>
        <h1 className="pt-5"> Project Preview </h1>
      </Row>
      <Row className="d-flex pb-5 my-5 justify-content-center  text-start">
        <PreviewCard 
          src={process.env.PUBLIC_URL + "/images/Fakestore.png"}
          title='Fakestore'
          description='Website Moqup for a fakestore'
        />
        <PreviewCard 
          src={process.env.PUBLIC_URL + "/images/EventPage.png"}
          title='Event Page'
          description='Moqup of an event page'
        />
        <PreviewCard 
          src={process.env.PUBLIC_URL + "/images/MovieSearch.png"}
          title='MovieSearch'
          description='Searches for Movies on IMDB'
        />
        <PreviewCard 
          src={process.env.PUBLIC_URL + "/images/ComingSoon.png"}
          title='Jewelry Store'
          description='Jewelry store page for my mom'
        />
      </Row>
    </Row>
  );
}
