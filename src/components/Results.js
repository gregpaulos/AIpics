import React from 'react';
import Photo from '../components/Photo'
import ResultCards from '../components/ResultCards'

export default function Results ({watson, google, clardata, getAI, source, AIButtonToggle, gotPhoto}) {
   
    let results = !AIButtonToggle ?
        <ResultCards watson={watson} google={google} clardata={clardata} />
    :
        null


    return (
        <div className="photo_with_results">
            {/* <div> Got to Results Page</div> */}
            <Photo source={source} getAI={getAI} AIButtonToggle={AIButtonToggle} gotPhoto={gotPhoto}/>
            {results}
        </div>
    )    
}


