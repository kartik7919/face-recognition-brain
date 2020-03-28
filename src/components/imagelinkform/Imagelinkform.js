import React from 'react';
import './Imagelinkform.css';
const Imagelinkform=({InputChange,ButtonClick})=>{
	return(
		<div>
			<p className='f3 center'>
			{"This magic brain detect faces in your picture , give it a try"}
			</p>
		<div className='center'>
			<div className='form center w-50 pa4 br3 shadow-5'>
			<input className='f4 pa2 w-70 center' type='text'  placeholder='enter url' onChange={InputChange}/>
			<button onClick={ButtonClick} className='w-30 grow link f4 ph3 pv2 dib white bg-light-purple'>Detect</button>
			</div>
		</div>
		
    </div>

    
		)
}
       

export default Imagelinkform;