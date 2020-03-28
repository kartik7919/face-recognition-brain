import React,{Component} from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Facerecognition from './components/Facerecognition/Facerecognition'; 
import Logo from './components/logo/Logo';
import Imagelinkform from './components/imagelinkform/Imagelinkform'; 
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';


const particleOption ={
      "particles": {
          "number": {
              "value": 200
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }

  

const initialState = {
      input:'',
      imageurl:'',
      bbox:{},
      route:'Signin',
      userissignedin:false,
      user:{
        name:'',
        email:'',
        id:'',
        joined: '',
        entries:0
      }
    }

class App extends Component{
  constructor(){
    super();
    this.state=initialState;
  }

  calculateFacelocation=(data)=>{
    const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image= document.getElementById('inputimage');
    const height= image.height;
    const width= image.width;

        return {
      leftcol:clarifaiface.left_col * width,
      toprow:clarifaiface.top_row * height,
      rightcol:width - (clarifaiface.right_col * width),
      bottomrow:height - (clarifaiface.bottom_row * height)
     }
  }

  loadUser=(data)=>{
    this.setState({user:{
      name:data.name,
      email:data.email,
      id:data.id,
      joined:data.joined,
      entries:data.entries
    }})
  }

  displayFacebox=(box)=>{
  this.setState({bbox:box})
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value})
  }

  onButtonClick=()=>{
    this.setState({imageurl:this.state.input})
   fetch('https://smart-brain7919.herokuapp.com/imageurl',{
    method:'post',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      input:this.state.input
    })
  }).then(response=>response.json())
  .then(response=>{

    if(response){

  fetch('https://smart-brain7919.herokuapp.com/image',{
    method:'put',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      id:this.state.user.id
    })
  })
  .then(response=>response.json())
  .then(count=>{
    this.setState(Object.assign(this.state.user,{entries:count}))
  })
  .catch(console.log)
  
    }
  this.displayFacebox(this.calculateFacelocation(response))

  })

  }

  onRoutechange=(route)=>{
    if(route==='Signin'){
      this.setState(initialState)
    }else if(route==='home'){
    this.setState({userissignedin:true})       
    }
    this.setState({route:route})
  }


  render(){
    return(
     <div>
     <Particles className='particle' params={particleOption}/>
     <Navigation userissignedin={this.state.userissignedin} onRoutechange={this.onRoutechange}/>
     { this.state.route==='home'?
     <div>
       <Logo />
       <Rank name={this.state.user.name} entries={this.state.user.entries}/>
       <Imagelinkform InputChange={this.onInputChange} ButtonClick={this.onButtonClick} />
       <Facerecognition box={this.state.bbox} Imageurll={this.state.imageurl}/>
       </div>
      :
       (
        this.state.route==='Signin'?
        <Signin loadUser={this.loadUser} onRoutechange={this.onRoutechange}/>
        :
        <Register loadUser={this.loadUser} onRoutechange={this.onRoutechange}/>
      )
   }
     </div>
    
      )
  }

}
    
     
   


export default App;
