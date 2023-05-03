
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'


const Togel=()=>{

    const [clr,setClr]=useState('green')

    return (
        <>
        <h1>heading</h1>
        <button style={{backgroundColor:clr}} onClick={(e)=>{
            console.log(e.target.style.backgroundColor);

            if(e.target.style.backgroundColor==='green'){
                setClr('red');
            }else{
                setClr('green')
            }

        }}>btn</button>
        </>
    )

}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Togel/>)