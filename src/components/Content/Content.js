import React from 'react';
import './Content.css';

const content = (props) => {
    let customStyling = { textAlign: props.customStyling }
    return(
        <div>
            <h2 style={customStyling}>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.bodyText}</p>

        </div>
    );
};


export default content;