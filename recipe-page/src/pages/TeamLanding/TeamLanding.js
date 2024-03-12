
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import testphoto from '../../images/testphoto.jpeg';


function teamlanding(){
    return(
        <div>
            <img src={testphoto} alt="tomnjerry" />
        </div>
    )
}

export default teamlanding;
=======
import yunus from '../../images/yunus.jpg';
import pakistan from '../../images/Pakistan.png';
import sosa from '../../images/sosa.jpg';
=======
// import yunus from '../../images/yunus.jpg';
// import pakistan from '../../images/Pakistan.png';
// import sosa from '../../images/sosa.jpg';
import model from '../../images/model.jpg';


>>>>>>> 63e3f91a3f41dc759142c249c0bdf70415387140

import './TeamLanding.css'; 
function TeamLanding() {

    const members = [
        {
            memberImage: model,
            name: "Yunus Kocaman",
            description: "Software Engineer",
        },
        {
            memberImage: model,
            name: "Danish Abbasi",
            description: "Software Engineer"
        },
        {
            memberImage: model,
            name: "Joseph Sosa",
            description: "Software Engineer"
        },
        {
            memberImage: model,
            name: "FitzGerald Wangaru",
            description: "Software Engineer"
        }
    ]
    return (
        <div className="Our__team">
                <div className="header" style={{ borderBottom: "3px solid black", width: "100%" }}>
                    <h1>Meet The Team</h1>
                </div>
            <div className="container">
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
        </div>
    );
}

<<<<<<< HEAD
export default TeamLanding;
>>>>>>> 02cc8a2300f6ec07ba5b5e889bd3451a6c5b162c
=======
export default TeamLanding;
>>>>>>> shoppingcart-FitzWangaru
