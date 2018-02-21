import React from 'react';
import ResultCard from '../components/ResultCard'


export default function ResultCards ({watson, google, clardata, getAI, source}) {

    let data=[]

    data.push({'name': 'CLARIFAI', 'results': [], 'logo': './assets/clarifai.png'}) 
    data.push({'name': 'WATSON', 'results': [], 'logo': './assets/watson.png'}) 
    data.push({'name': 'GOOGLE IMAGE', 'results': [], 'logo': './assets/google.jpg'}) 


    if (clardata.length > 0) {
        data[0].results.push(clardata.map(description => description))
    }
    
    if (watson.length > 0) {
        data[1].results.push(watson[0].map(description => description))
    }
    
    if (google.length > 0) {
        data[2].results.push(google[0].map(description => description.description))
    }
 
    return (
        <div className="card_deck">
            {data.map(api => <ResultCard key={api.name} apiName={api.name} data={api.results} logo={api.logo}/>)}
        </div>
    )    
}



