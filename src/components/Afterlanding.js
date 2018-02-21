import React from 'react';
import GetPhoto from '../components/GetPhoto'
import Results from '../components/Results'

export default function Afterlanding ({PhotoButtonToggle, AIButtonToggle, source, getAI, watson, google, clardata, getPhoto, gotPhoto}) {
   let logo = "./assets/eye.png"

    return (
    <div>
       <header className="App-header">
            <img src={logo} alt="" className="App-logo"/>
            <h1>AI Vision Tester</h1>
        </header>
       <div>
            {PhotoButtonToggle ?
                <div >
                    <GetPhoto getPhoto={getPhoto} />
                </div>
           
            :
                <Results source={source} gotPhoto={gotPhoto} getAI={getAI} watson={watson} google={google} clardata={clardata} AIButtonToggle={AIButtonToggle}/>
              
            }
        </div>
    </div>
    )    
}