import React from 'react';
export default function Member({ memberImage, name, description}) {
    return (
        <div className="Member">
            <div style={{ float: "left" }}>
                <img className = "memberImage" src={memberImage} alt="Member" />
            </div>
            <h2>{name}:</h2>
            <p>{description}</p>
        </div>
    );
}
