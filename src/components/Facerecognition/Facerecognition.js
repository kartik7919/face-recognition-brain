import React from 'react';
import './Facerecognition.css'
const Facerecognition=({Imageurll,box})=>{
	return(
             <div className='center ma'>
                <div className='absolute mt2'>
                <img id='inputimage' alt='k' src={Imageurll} height='auto' width='500px'/>
                <div className='bounding-box r0q27izyj0a9' style={{top:box.toprow,right:box.rightcol, bottom:box.bottomrow, left:box.leftcol}}></div>
                </div>
             </div>
             )
}
                
               
                
export default Facerecognition;
                
       
