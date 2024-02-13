import { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button, Form } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

export const NavBar = () => {
    const [showModal, setShowModal] = useState(false);
    const [groceryList, setGroceryList] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        setGroceryList([...groceryList, newItem]);
        setNewItem('');
    };

    const handleRemoveItem = (index) => {
        const updatedList = [...groceryList];
        updatedList.splice(index, 1);
        setGroceryList(updatedList);
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Main Page</Nav.Link>
                        <Nav.Link href="/TeamLanding">Team Page</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => setShowModal(true)}>
                            <FaShoppingCart />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Grocery List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formItem">
                            <Form.Label>Item</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter item"
                                value={newItem}
                                onChange={(e) => setNewItem(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <ul>
                        {groceryList.map((item, index) => (
                            <li key={index}>
                                {item}
                                <Button variant="danger" size="sm" onClick={() => handleRemoveItem(index)}>
                                    -
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddItem}>
                        Add Item
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};