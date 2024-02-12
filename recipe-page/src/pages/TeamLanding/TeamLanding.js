import React from 'react';
import Member from '../../components/Member/Member';
import yunus from '../../images/yunus.jpg';
import pakistan from '../../images/Pakistan.png';
import sosa from '../../images/sosa.jpg';

import './TeamLanding.css'; // Import the CSS file for styling
function TeamLanding() {
    return (
        <div className="TeamLanding">
            <div className="header" style={{ borderBottom: "3px solid black", width: "100%" }}>
                <h1>Meet The Team</h1>
            </div>
            <div className="members-container"> 
                <Member
                    name="Yunus Kocaman"
                    description="Yunus Kocaman is a sophomore at Brandeis University. He is majoring in Computer Science and is intrested in full stack developing."
                    memberImage={yunus}
                />
                <Member
                    name="Danish Abbasi"
                    description="Patrick Star is SpongeBob's best friend. He is known for his love of ice cream and his lack of intelligence."
                    memberImage={pakistan}
                />
                <Member
                    name ="Joseph Sosa"
                    description="Joseph Sosa is SpongeBob's neighbor. He is known for his love of music and his dislike of SpongeBob."
                    memberImage={sosa}
                />
                <Member
                    name ="Fitz Gerald"
                    description="Mr. Krabs is the owner of the Krusty Krab. He is known for his love of money and his greed."   
                    memberImage={pakistan}
                />
            </div>
        </div>
    );
}

export default TeamLanding;
