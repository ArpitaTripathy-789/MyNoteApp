import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../AxiosInstance/axiosinstance'

const Login = () => {
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })
   
    const navigate=useNavigate()




    const handleInput=(e)=>{
        const {name,value}=e.target 
        setformdata({...formdata,[name]:value})
    }
   
    const handleForm=async(e)=>{
        e.preventDefault()
       const {data}=await axiosInstance.get("/users")
       console.log(data)
       const currentuser=data.find((ele)=>(ele.email===formdata.email))
       console.log(currentuser)
       if(!currentuser){
        toast.error("Email Id is not Register")
        return
       }
       if(currentuser.password!==formdata.password){
         toast.error("Invalid password")
        return
       }

       //! generate a token and store the token in local storage 

       const token="asertfyguhijok.ppx3dc45fv6bg7nh8jm9."+currentuser.id

       localStorage.setItem("jwt_token",JSON.stringify(token))
       
       toast.success("Login Successfully",{position:"top-right"})
       navigate("/dashboard")
        setformdata({
            email:"",
            password:""
        })
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-cyan-100">
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleForm}>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name='email'
              value={formdata.email}
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name='password'
              value={formdata.password}
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Login Button */}
          <button
            className="w-full py-2 text-white font-semibold rounded-md 
            bg-gradient-to-r from-indigo-500 to-blue-500 
            hover:from-indigo-600 hover:to-blue-600 transition"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account? 
          <Link to="/register" className="text-blue-500 hover:underline ml-1">
            Register
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login