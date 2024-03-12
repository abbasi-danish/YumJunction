import { Card } from 'react-bootstrap';
import './newpage.css'

export default function newPage({ title, ingredients, directions, pageImage }) {
    return (
        <div className="page">
            <div className="header" style={{ margin: '10px', maxWidth: '100%', maxHeight: '500px', borderRadius: '5px', textAlign: 'center' }}>
                <h1>{title}</h1>
            </div>
            <div style={{ float: "right" }}>
                <img className = "pageImage" src={pageImage} alt="Dish" style={{borderRadius: '10px' }}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Card style={{ width: '100%', backgroundColor: '#0e4fab', color: '#fff', marginBottom: '20px' }}>
            <Card.Header style={{ fontSize: '2em' }}>Ingredients 🍗 </Card.Header>
                    <Card.Body>
                                <ul className="stylish-list">
                                    {ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                     ))}
                                </ul>
                    </Card.Body>
            </Card>
            <Card style={{ width: '100%', backgroundColor: '#0e4fab', color: '#fff' }}>
            <Card.Header style={{ fontSize: '2em' }}>Instructions 📝 </Card.Header>
            <Card.Body>
            <ul className="stylish-list">
                {directions.map((direction, index) => (
                    <li key={index}>{direction}</li>
                ))}
            </ul>
            </Card.Body>
            </Card>
            </div>
        </div>
    );
}


