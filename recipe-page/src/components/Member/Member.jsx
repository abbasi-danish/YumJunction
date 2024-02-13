import React from 'react';
export default function Member({ memberImage, name, description}) {
    return (
        <div className="member_wrapper">
            {/* <div className="member_details"> */}
                {/* <div className="member_name"> */}
                    <img className="member_img" src={memberImage} alt="Member"/>
                    <div className='member_detatis'>
                        <h4>{name}:</h4>
                        <p>{description}</p>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </div>
    );
}
