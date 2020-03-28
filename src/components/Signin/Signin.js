import React, {Component} from 'react';

class Signin extends Component{
  constructor(props){
    super(props)
    this.state={
      signInEmail:'',
      signInPassword:''
    }
  }

   onEmailChange=(event)=>{
    this.setState({signInEmail:event.target.value})
  }

   onPasswordChange=(event)=>{
    this.setState({signInPassword:event.target.value})
  }
  onSubmit=()=>{
      fetch('https://smart-brain7919.herokuapp.com/signin',{
        method:'post',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          email:this.state.signInEmail,
          password:this.state.signInPassword
        })
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.id){
          this.props.onRoutechange('home')
          this.props.loadUser(data)
        }else{
          alert('Combination of Email-id and Password is wrong!! plz try again')
        }
      })

      
}

        
      
      

  render(){
    return(
             <div>
             <article className="br5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
             <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
      value="Sign in"
    />
    </div>
    <div className="lh-copy mt3">
      <p onClick={()=>this.props.onRoutechange('register')} className="f6 link di pointer black db">Register</p>
    </div>
  </div>
</main>
</article>
        </div>
          )
  }
	
}
                
             
               
                
export default Signin;
                
       
