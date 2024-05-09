import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../assets/css/navbar.css";

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar expand="lg">
                <Container fluid="lg">
                    <Navbar.Brand>
                        <Link to="/" className='nav-link'>
                            Home
                        </Link>
                    </Navbar.Brand>
                    <div className='d-flex align-items-center nav-main-menu'>
                        <Navbar.Toggle aria-controls="navbar-nav">
                            <i class="fa-solid fa-bars open"></i>
                            <i class="fa-solid fa-xmark close"></i>
                        </Navbar.Toggle>
                        <Button variant="primary" onClick={handleShow}>
                            <i class="fa-solid fa-bars open"></i>
                            <i class="fa-solid fa-xmark close"></i>
                        </Button>
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="w-100 justify-content-lg-end">
                                <Link to="/ecosystem" className='nav-link'>Ecosystem</Link>
                                <Link to="/guided-services" className='nav-link'>Guided Services</Link>
                                <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                                <Link to="/connect-wallet" className='nav-link'>Connect Wallet</Link>
                                <Link to="/mint-now" className='btn nav-link'>Mint Now</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} className="mobileNavbar">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link to="/ecosystem" className='nav-link'>Ecosystem</Link>
                    <Link to="/guided-services" className='nav-link'>Guided Services</Link>
                    <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                    <Link to="/connect-wallet" className='nav-link'>Connect Wallet</Link>
                    <Link to="/mint-now" className='btn nav-link'>Mint Now</Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Header;