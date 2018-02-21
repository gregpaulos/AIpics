import React from 'react';

export default function Landing ({start}) {
    return (
        <div className="landing_image">    
            <div >
                <div className="landing_text">
                    <h1 className="display-3">Let's Test Our Robot Overlords!</h1>
                    <p className="lead"> They may rule the world soon, but let's see how good they are at recognizing what's in a picture right now.</p>
                </div>
                <button className="landing_button" onClick={start}>Get Started ></button>
            </div>
        </div>
    )  
}