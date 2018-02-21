import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing'
import Afterlanding from './components/Afterlanding'
import keys from './.keys.js'

const Clarifai = require('clarifai');
const clarry = new Clarifai.App({
  apiKey: keys.clarifai
 });

class App extends Component {

  constructor () {
    super();
    this.state = {randomPhoto:[], watson:[], google: [], clardata: [],
      start: true, PhotoButtonToggle: true, gotPhoto: false, AIButtonToggle: true, ResultsToggle: false, TryAgainToggle: false};
    this.clarry = clarry.models.predict.bind(this);
  }

  start = () => {
    let start = !this.state.start
    this.setState( {start})
  }

  getPhoto = () => {
    let PhotoButtonToggle = !this.state.PhotoButtonToggle
    this.setState( {PhotoButtonToggle})

    let splashauth = {"Authorization": keys.unsplash}
    return fetch('https://api.unsplash.com/photos/random', {
      method: 'get',
      headers: splashauth
      })
    .then(response => response.json())
    .then(data => {
      let random = []
      random.push(data.urls.regular)
      this.setState({ randomPhoto: random, gotPhoto: true})      
    })
  }
 
  getAI = () => {

    let AIButtonToggle = !this.state.AIButtonToggle
    this.setState( {AIButtonToggle})

    let ResultsToggle = !this.state.ResultsToggle
    this.setState( {ResultsToggle})

    let pic = this.state.randomPhoto[0]
    
    // Watson 
    let url = "https://galvanize-cors.herokuapp.com/https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key="+keys.watson+"&url="+pic
  
    var options = {
      method: 'get',
      headers: new Headers({"Content-Type": "application/json", })
    };
  
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
      
      let watson = []
      
      let results = data.images[0].classifiers[0].classes.map(dic => dic.class)
      
      watson.push(results)
      this.setState({ watson: watson})      
    })
    .catch(error => {
      console.log(error)
      let watson = [['server error']]
      this.setState({ watson: watson})
    });

    // Google Image Recog
    var bodyToPost = {
          "requests":[
            {
              "image":{
              "source":{
                  "imageUri":""    		
                }
              },
              "features":[
                {
                  "type":"LABEL_DETECTION",
                  "maxResults":5
                }
              ]
            }
          ]
        };

    bodyToPost.requests[0].image.source.imageUri = this.state.randomPhoto[0]
    let JSONbodyToPost = JSON.stringify(bodyToPost);
    fetch('https://vision.googleapis.com/v1/images:annotate?key='+keys.google, {
        method: 'post',
        body: JSONbodyToPost,
        headers: new Headers({"Content-Type": "application/json"})
      })
    .then(response => response.json())
    .then(data => {
 
        let google = []
        
        if (!data.responses[0].error) {
          google.push(data.responses[0].labelAnnotations)
        } else {
          google.push([])
        }
                 
        this.setState({ google: google})
    }).catch(error => {
      console.log(error)
      let google = ['server error']
      this.setState({ google: google})
    });  

    // Clarifai
    clarry.models.predict(Clarifai.GENERAL_MODEL, pic).then(
      (response) => {
        let clardata = [];
      
        let clariresults = response.outputs[0].data.concepts.map(dic => dic.name)

        clardata.push(clariresults)
 
        this.setState({ clardata: clardata[0]})  
      },
      (err) => {
        console.error(err);
      }
    );
  }


  render() {
    return (
      <div className="App">
        {this.state.start ?
          <Landing start={this.start}/>
        :
          <Afterlanding PhotoButtonToggle={this.state.PhotoButtonToggle} AIButtonToggle={this.state.AIButtonToggle} source={this.state.randomPhoto[0]} 
          getAI={this.getAI} watson={this.state.watson} google={this.state.google} clardata={this.state.clardata} getPhoto={this.getPhoto} gotPhoto={this.state.gotPhoto}/>
        }
      </div>
    );
  }
}

export default App;
