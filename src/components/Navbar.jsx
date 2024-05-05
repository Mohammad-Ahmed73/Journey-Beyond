import { React } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/navbar.css"
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
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
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="w-100 justify-content-end">
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
        </>
    );
}

export default Header;