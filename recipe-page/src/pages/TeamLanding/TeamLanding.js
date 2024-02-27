import React from 'react';
import yunus from '../../images/yunus.jpg';
import pakistan from '../../images/Pakistan.png';
import sosa from '../../images/sosa.jpg';

import './TeamLanding.css'; 
function TeamLanding() {
    const members = [
        {
            memberImage: yunus,
            name: "Yunus Kocaman",
            description: "Yunus Kocaman is a sophomore at Brandeis University. He is majoring in Computer Science and is interested in full stack development.",
        },
        {
            memberImage: pakistan,
            name: "Danish Abbasi",
            description: "Danish Abbasi is SpongeBob's best friend. He is known for his love of ice cream and his lack of intelligence."
        },
        {
            memberImage: sosa,
            name: "Joseph Sosa",
            description: "Joseph Sosa is SpongeBob's neighbor. He is known for his love of music and his dislike of SpongeBob."
        },
        {
            memberImage: pakistan,
            name: "Fitz Gerald",
            description: "Fitz Gerald is the owner of the Krusty Krab. He is known for his love of money and his greed."
        }
    ]
        return (
            <div className="TeamLanding">
                <div className="header" style={{ borderBottom: "3px solid black", width: "100%" }}>
                    <h1>Meet The Team</h1>
                </div>
                <div className="team__wrapper">
                {
                    members.map((item, index) => (
                        <div className='team__item' key={index}>
                            <div className='team__img'>
                                <img src={item.memberImage} alt='Member' />
                            </div>
                            <div className='team__details'>
                                <h4>{item.name}</h4>
                                <p className='description'>{item.description}</p>
                                
                            </div>

                        </div>
                        ))
                    }
                </div>
            </div>
        );
}

export default TeamLanding;