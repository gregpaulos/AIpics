import React from 'react';

export default function GetPhoto ({getPhoto}) {  
    return (
        <div>
            <h3 className="lead"> First step: Let's request a random photo 
                from unSplash that we can use to test some image recognition APIs </h3>
            <p>Disclaimer: this is a RANDOM photo - I have no idea what's going to come back. My apologies if it offends your sensibilities</p>
            <button className="other_buttons" onClick={getPhoto}>Get Random Pic > </button>        
        </div>
    )    
}