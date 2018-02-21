import React from 'react';

export default function Photo ({source, getAI, AIButtonToggle, gotPhoto}) {  
    
    let spinsource = "./assets/circles.svg"

    let AIbutton = AIButtonToggle? 
            <div> <button className="other_buttons" onClick={getAI}>Send This Pic to the Robots ></button> </div>
        :
            null

    let photo = gotPhoto ?
            <div className="with_AI_button">
                <div> <img className="main_image" src={source} alt=""/> </div>
                <div className="AIButtonplacement">
                    {AIbutton}
                </div>
            </div>
        :
            <div>
                <h2> LOADING PICTURE... </h2>
                <img src={spinsource} width="200px" alt=""/>
            </div>
    
    return (
        <div>
            {photo}
        </div>
    )    
}

