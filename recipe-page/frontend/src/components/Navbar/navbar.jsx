import { useContext, useState } from 'react';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { GroceryListContext } from '../GroceryList/grocerylistcontext'; 
import AddGroceryItemForm from '../GroceryList/addgroceryitem';
import styles from '../GroceryList/grocerylist.module.css';

export const NavBar = () => {
    
    const context = useContext(GroceryListContext);
    // const { groceryList, handleIncrease, handleDecrease, handleRemoveItem, handleClearList } = useContext(GroceryListContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/">Main Page</Nav.Link>
                        <Nav.Link href="/TeamLanding">Team Page</Nav.Link>
                    </Nav>
                    <Button variant="primary" style={{ float: 'left' }} onClick={handleShow}>
                        Grocery List
                    </Button>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Grocery List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddGroceryItemForm />
                    {context && context.groceryList.map((item, index) => (
                          <div key={item.id} className={styles.groceryItem}>
                            {item.name} - Quantity: {item.quantity}
                            <button onClick={() => context.handleIncrease(index)}>+</button>
                            <button onClick={() => context.handleDecrease(index)}>-</button>
                            <button onClick={() => context.handleRemoveItem(index)}>Remove</button>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={context && context.handleClearList}>
                        Clear List
                    </Button>
                    <Button variant="primary" onClick={context &&context.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            
        </>
    );
};