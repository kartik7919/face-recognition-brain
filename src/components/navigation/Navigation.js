import React from 'react';

const Navigation=({onRoutechange,userissignedin})=>{
		
			if(userissignedin){
				return(
	                <nav style={{display:'flex',justifyContent:'flex-end' }}>
	       <p onClick={()=>onRoutechange('Signin')}className='f3 link dim black underline pa3 pointer'>Sign out</p>
	       </nav>
			)
	      
			}else{
				return(
	           <nav style={{display:'flex',justifyContent:'flex-end' }}>
	        <p onClick={()=>onRoutechange('Signin')}className='f3 link dim black underline pa3 pointer'>Sign in</p>
	        <p onClick={()=>onRoutechange('Register')}className='f3 link dim black underline pa3 pointer'>Register</p>
	       </nav>
					)
				
			}
	}
       


export default Navigation;