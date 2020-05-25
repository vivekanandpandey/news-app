import React from 'react';
import '../App.css'; 

function LoaderComponent(props) {
    return (
        <>
        {props.isLoader && <div className="loader-container">
            <div className="loader"></div>
            <div className="loader-text">Loading...</div>
        </div>}
        </>
    )
}

export default LoaderComponent
