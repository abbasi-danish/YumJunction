export default function newPage({ title, ingredients, directions, pageImage }) {
    return (
        <div className="page">
            <div className="header" style={{ borderBottom: "3px solid black", width: "100%" }}>
                <h1>{title}</h1>
            </div>
            <div style={{ float: "right" }}>
                <img className = "pageImage" src={pageImage} alt="Dish" />
            </div>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ul>
                {directions.map((direction, index) => (
                    <li key={index}>{direction}</li>
                ))}
            </ul>
        </div>
    );
}


