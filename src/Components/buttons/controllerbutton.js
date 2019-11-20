import React from 'react';

const Custombutton =(props)=>(
    <div className="customButton">
        <button className={props.name} onClick={props.click}>{props.children}</button>
    </div>
)

export default Custombutton