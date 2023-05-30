import React, { useState } from 'react'
import {FaLinkedin,FaInstagram,FaFacebook} from 'react-icons/fa'


const Contact = () => {
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <>
      <div className=' rounded-3xl max-h-screen '>
        <form className='m-4 text-center flex flex-col gap-4 bg-gradient-to-r from-slate-500 to-black rounded-full'>
          <label className=''>

            <input className='p-2  bg-black text-white rounded-xl m-2' type="text"
              value={name}
              placeholder="ENTER NAME:"
              onChange={(e) => setName(e.target.value
              )}
              


            />

          </label>

          <label className=''>

            <input className='p-2  bg-black text-white  rounded-xl ' type="text"
              value={email}
              placeholder="ENTER EMAIL:"
              onChange={(e) => setEmail(e.target.value
              )}


            />

          </label>

          <label className=''>

            <input className='p-2  bg-black text-white  rounded-xl m-2' type="number"
              value={phone}
              placeholder="ENTER PHONE.NO:"
              onChange={(e) => setPhone(e.target.value
              )}


            />


          </label>
          <input className='text-white bg-gradient-to-t from-slate-500 to-black  w-full rounded-full hover:cursor-pointer p-1 text-xl font-bold' type="submit" value="Submit" />

        </form>
        
      </div>

      <div className='flex items-center justify-center gap-4 my-10 text-white font-bold'>
        {/* <ul className='flex gap-4 mt-10'>
          <li>instagram </li>
          <li>linkdin </li>
          <li>facebook </li>
        </ul> */}
       
          <h1 className='font-bold  m-4 text-black text-3xl'>connect with me-- </h1>
       
       
       

        <a className='bg-gradient-to-b from-red-500 to-orange-800 p-2 rounded-3xl ' href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram className='animate-bounce w-6 h-6 hover:animate-bounce hover:w-10 hover:h-10 hover:animate-ping'/></a>
        <a className='bg-gradient-to-t from-blue-500 to-sky-600 p-2 rounded-3xl ' href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook className='animate-bounce w-6 h-6 hover:animate-bounce hover:w-10 hover:h-10 hover:animate-ping'/></a>
        <a className='bg-blue-800 p-2 rounded-3xl ' href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className='animate-bounce w-6 h-6 hover:animate-bounce hover:w-10 hover:h-10 hover:animate-ping'/></a>
       
       
       
      
      </div>
    </>
  )
}

export default Contact
