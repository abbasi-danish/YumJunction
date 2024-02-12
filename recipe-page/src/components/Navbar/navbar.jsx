import { Navbar, Nav, Container } from 'react-bootstrap';

import { FaShoppingCart } from 'react-icons/fa';

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Main Page</Nav.Link>
                    <Nav.Link href="/TeamLanding">Team Page</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/cart">
                        <FaShoppingCart />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
