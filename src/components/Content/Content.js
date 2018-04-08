import React from 'react';
import './Content.css';

const content = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.bodyText}</p>

        </div>
    );
};


export default content;