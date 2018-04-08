import React from 'react';

const MeetTeamBlock = (props) => {
    const buildPicURL = props.img
    return(
        <div className='content'>
            <div className='row'>
                <div className="column-twenty">
                    <div className='teamMemberImg' style={{backgroundImage: props.img}}></div>
                </div>
                <div className="column-eighty">
                    <div className='teamMemberDesc'>
                        <p>{props.name} </p>
                        <p>{props.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MeetTeamBlock;