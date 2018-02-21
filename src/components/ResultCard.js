import React from 'react';

export default function ResultCard ({apiName, data, logo}) {
   
    let spinsource = "./assets/circles.svg"
 
    let results = data.length > 0 ?
            <ul>  
                {data[0].map((description, i) => <li key={i}> {description} </li>)}
            </ul>
        :         
            <div> 
                <h4> Robot Thinking... </h4> 
                <img src={spinsource} alt=""/>
            </div>

    return (
        <div className="card">
            <img src={logo} alt="" />
            <hr/>
            <div>
                <div>{apiName}</div>
                <div> {results}</div>
            </div>
        </div>           
    )    
}
