import React from 'react';
import Member from '../../components/Member/Member';
function teamlanding(){
    return(
        <div className="TeamLanding">
            <div className="header" style={{ borderBottom: "3px solid black", width: "100%" }}>
                <h1>Meet The Team</h1>
            </div>
            <Member 
            name="Yunus"
            description="Spongebob is the fry cook at the Krusty Krab. He is known for his love of jellyfishing and his positive attitude."
            memberImage="https://www.denofgeek.com/wp-content/uploads/2019/07/spongebob-squarepants.jpg?resize=768%2C432"
            />
        </div>
    )
}

export default teamlanding;