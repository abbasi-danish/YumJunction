import { useContext, useState } from 'react';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { GroceryListContext } from '../GroceryList/grocerylistcontext'; // adjust the path as needed
import AddGroceryItemForm from '../GroceryList/addgroceryitem';
import styles from '../GroceryList/grocerylist.module.css';
export const NavBar = () => {
    const { groceryList, handleIncrease, handleDecrease, handleRemoveItem, handleClearList } = useContext(GroceryListContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Main Page</Nav.Link>
                        <Nav.Link href="/TeamLanding">Team Page</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Button variant="primary" onClick={handleShow}>
                            Grocery List
                        </Button>
                    </Nav>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Grocery List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddGroceryItemForm />
                    {groceryList.map((item, index) => (
                          <div key={item.id} className={styles.groceryItem}>
                            {item.name} - Quantity: {item.quantity}
                            <button onClick={() => handleIncrease(index)}>+</button>
                            <button onClick={() => handleDecrease(index)}>-</button>
                            <button onClick={() => handleRemoveItem(index)}>Remove</button>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClearList}>
                        Clear List
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};