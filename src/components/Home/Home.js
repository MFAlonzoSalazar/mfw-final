import { Container } from "react-bootstrap";
import Introduction from "./Introduction";
import ProjectPreview from "./ProjectPreview";

export default function Home() {

  return (
    <Container className="text-center">
      <Introduction />
      <ProjectPreview/>
    </Container>
  );
}
