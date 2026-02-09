import React, { useState } from 'react'
import bg from "../assets/registerbg.jpeg"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
   const navigate = useNavigate();
  const[username,setusername]=useState("");
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
     const[errmsg,seterrmsg]=useState("")
const registerUser=async()=>{
  try{
const res=await axios.post("http://localhost:8000/api/v1/register",{
 name:username,
 email:email,
 password:password,
  })
  if(res.data.success===true){
    navigate("/login")  }
  }catch(err){
    seterrmsg("Registration failed")
  }
 }
    

  return (
    <>
          
    <div className='flex flex-col justify-center h-screen items-center gap-5'
    style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      >
    <p className='font-semibold text-3xl'>
        Craft your glow</p>

    <div className='flex flex-col gap-5' >
    <input 
    value={username}
    onChange={(e)=>setusername(e.target.value)}
    className='border border-black/20 rounded-lg px-4 py-2 w-[300px] hover:shadow-lg outline-none bg-white'
    placeholder='Name' />
    <input
    className='border border-black/20 outline-none bg-white rounded-lg px-4 py-2 w-[300px] hover:shadow-lg'
    type="email"
    value={email}
    placeholder='Email'
    onChange={(e)=>setemail(e.target.value)} />

    <input 
    className='border border-black/20 rounded-lg px-4 py-2 outline-none bg-white w-[300px] hover:shadow-lg'
    type="password"
    value={password}
    placeholder='Password'
    onChange={(e)=>setpassword(e.target.value)} />

    {errmsg && <p className='text-red-500 text-sm font-semibold'>{errmsg}</p>}

    <button 
    onClick={registerUser}
   className='bg-black text-white px-4 py-2 rounded-xl'
    >Signup</button>

     <p 
     className='text-center text-black/60 font-semibold text-lg'>
        Already member?<Link to={"/login"}><span className='font-bold hover:underline text-pink-900 hover:cursor-default'>
            Login</span></Link></p>
   </div>
   </div>
   </>
  )
}

export default Signup