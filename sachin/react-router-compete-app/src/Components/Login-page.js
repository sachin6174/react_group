import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Login_page = () => {
  const [username, setUsername] = useState("")

  const [password, setPassword] = useState("")

  const [nusername, setNusername] = useState("")

  const [npassword, setNpassword] = useState("")

  const valid_login=(username,password)=>{
    if(username && password){
      
        if(password===localStorage.getItem(username)){
          alert('logged in');
        
        }else{
          alert('wrong password or username')
        }
    }else if(!username){
      alert('enter-username');
    }else if(!password){
      alert('enter-password');
    }

    
  }

  const sign_up=(nusername,npassword)=>{
    if(localStorage.getItem(nusername) !== null){
      alert('this user already-exist')
    }else{
      localStorage.setItem(nusername,npassword);
      alert('thanks for sign-up ')
    }
    
  }


 

  return (
    <>
    <div className='divide-y-2 divide-blue-400'>
      <div className=' rounded-3xl max-h-screen'>
        <form className='m-4 text-center flex flex-col item-center justify-center gap-4 bg-gradient-to-r rounded-full w-1/3 h-1/3 pb-4  ' onSubmit={(e)=>{
          e.preventDefault();
        }}>
          <h1 className='font-extrabold text-blue-800 text-2xl font-serif'>SIGN-IN</h1>
          <label className="">

            <input className='p-2  bg-black text-white rounded-xl my-2' type="text"
              value={username}
              placeholder="ENTER USERNAME:"
              onChange={(e) => setUsername(e.target.value
              )}
              


            />

          </label>

          <label className=''>

            <input className='p-2  bg-black text-white  rounded-xl ' type="text"
              value={password}
              placeholder="ENTER PASSWORD:"
              onChange={(e) => setPassword(e.target.value
              )}


            />

          </label>

          <button className='text-white w-32 ml-48 bg-blue-800 font-extrabold font-serif text-xl rounded-lg ' onClick={()=>{
            valid_login(username,password)
            setUsername("");
            setPassword("")
          }}>login</button>


        </form>

      </div>
      
      <div className=' rounded-3xl max-h-screen '>
        <form className='m-4 text-center flex flex-col item-center justify-center gap-4 rounded-full w-1/3 h-1/3 pb-4' onSubmit={(e)=>{
          e.preventDefault();
        }}>
          <h1 className='font-extrabold text-blue-800  text-2xl font-serif'>SIGN-UP</h1>
          <label className=''>

            <input className='p-2  bg-black text-white rounded-xl my-2' type="text"
              value={nusername}
              placeholder="ENTER USERNAME:"
              onChange={(e) => setNusername(e.target.value
              )}
              


            />

          </label>

          <label className=''>

            <input className='p-2  bg-black text-white  rounded-xl ' type="text"
              value={npassword}
              placeholder="ENTER PASSWORD:"
              onChange={(e) => setNpassword(e.target.value
              )}


            />

          </label>

          <button className='text-white w-32 ml-48 bg-blue-800 font-extrabold font-serif text-xl rounded-lg 'onClick={()=>{
            sign_up(nusername,npassword);
            setNusername("");
            setNpassword("");
          }} >sign-up</button>


        </form>

      </div>
      </div>


    </>
  )
}
export default Login_page
