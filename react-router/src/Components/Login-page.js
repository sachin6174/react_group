import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login_page = () => {
  const [username, setUsername] = useState("")

  const [password, setPassword] = useState("")

  const [nusername, setNusername] = useState("")

  const [npassword, setNpassword] = useState("")


 

  return (
    <>
      <div className=' rounded-3xl max-h-screen '>
        <form className='m-4 text-center flex flex-col item-center justify-center gap-4 bg-gradient-to-r from-white to-gray-500 rounded-full w-1/3 h-1/3 pb-4'>
          <h1 className='font-extrabold text-blue-800 text-2xl font-serif'>SIGN-IN</h1>
          <label className="">

            <input className='p-2  bg-black text-white rounded-xl m-2' type="text"
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

          <button className='bg-white w-32 ml-48 text-blue-800 font-extrabold font-serif text-xl rounded-lg ' onClick={()=>location.reload()}>login</button>


        </form>

      </div>

      <div className=' rounded-3xl max-h-screen '>
        <form className='m-4 text-center flex flex-col item-center justify-center gap-4 bg-gradient-to-r from-slate-500 to-white rounded-full w-1/3 h-1/3 pb-4'>
          <h1 className='font-extrabold text-blue-800  text-2xl font-serif'>SIGN-UP</h1>
          <label className=''>

            <input className='p-2  bg-black text-white rounded-xl m-2' type="text"
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

          <button className='bg-white w-32 ml-48 text-blue-800 font-extrabold font-serif text-xl rounded-lg'>sign-up</button>


        </form>

      </div>


    </>
  )
}
export default Login_page
