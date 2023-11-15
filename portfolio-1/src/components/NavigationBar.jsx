import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import navIcon1 from '../assets/images/nav-icon1.svg'
import navIcon2 from '../assets/images/nav-icon2.svg'
import navIcon3 from '../assets/images/nav-icon3.svg'

const NavigationBar = () => {
    const [active, setActive] = React.useState('home');
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.addEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActive(value)
    }

    return (
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">PS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={active === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={active === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={active === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='#'><img src={navIcon1} alt='' /></a>
                                <a href='#'><img src={navIcon2} alt='' /></a>
                                <a href='#'><img src={navIcon3} alt='' /></a>
                            </div>
                            <button className='vvd' onClick={() => console.log("connect")}><span>Let's Connect</span></button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
