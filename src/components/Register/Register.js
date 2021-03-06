import React,{Component} from 'react';

class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      registerName:'',
      registerEmail:'',
      registerPassword:''
    }
  }


onNameChange=(event)=>{
  this.setState({registerName:event.target.value})
}

onEmailChange=(event)=>{
  this.setState({registerEmail:event.target.value})
}

onPasswordChange=(event)=>{
  this.setState({registerPassword:event.target.value})
}

onSubmit=()=>{
  fetch('https://smart-brain7919.herokuapp.com/register',{
    method: 'post',
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      name:this.state.registerName,
      email:this.state.registerEmail,
      password:this.state.registerPassword
    })
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.id){
      this.props.loadUser(data);
      this.props.onRoutechange('home')
    }else{
      alert('TRY AGAIN')
    }
  })
}



  render(){
    return(
             <div>
             <article className="br5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
             <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">REGISTER</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="name"  
        id="name"
        onChange={this.onNameChange}
      />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address" 
        id="email-address"
        onChange={this.onEmailChange}
      />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password" 
        id="password"
        onChange={this.onPasswordChange}
      />
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="">
      <input 
      onClick={this.onSubmit}
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Register"
    />
    </div>
  </div>
</main>
</article>
        </div>
          )
  }
	
}
                
             
               
                
export default Register;
                
       
