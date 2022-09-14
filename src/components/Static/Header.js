import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { StyledNavBar, ResumeLink } from '../StyledComponents';
import MyNavLink from './MyNavLink';
import ThemeToggle from './ThemeToggle';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return(
        <StyledNavBar expand="md">
            <Container className="px-md-5" fluid>
                <Navbar.Brand>
                    <NavLink className='Links' to='/'>
                        <Image src={process.env.PUBLIC_URL + '/images/logo.png'} className='img-fluid' alt='Fernanda Blaise Logo'/>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav className='gap-lg-5 gap-md-3 align-items-center'>
                        <Nav.Link>
                            <MyNavLink route="/" label="Home" />
                        </Nav.Link>
                        <Nav.Link >
                            <MyNavLink route="/aboutme" label="About Me" />
                        </Nav.Link>
                        <Nav.Link >
                            <MyNavLink route="/projects" label="Projects"/> 
                        </Nav.Link>
                        <ResumeLink className="Links" href={process.env.PUBLIC_URL + '/files/FernandaBlaiseResume.pdf'} target="_blank">
                            Resume
                        </ResumeLink>                        
                        <ThemeToggle />
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </StyledNavBar>
    );
}