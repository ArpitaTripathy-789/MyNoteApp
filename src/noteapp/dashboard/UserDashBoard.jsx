import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosAddCircleOutline, IoMdLogOut } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { MdOutlineAddTask } from 'react-icons/md'
import { TbUserEdit } from 'react-icons/tb'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { GlobalcontextApi } from '../context/Globalcontext'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../AxiosInstance/axiosinstance'

const UserDashboard = () => {

  const id = JSON.parse(localStorage.getItem("jwt_token")).split(".")[2]

  const dashboardlist=[
    {
      text:"Dashboard",
      path:"/dashboard",
      icon:<IoHomeOutline />
    },
    {
      text:"Profile",
      path:`/dashboard/profile/${id}`,
      icon:<FaUserCircle />
    },
   
    {
      text:"all notes",
      path:"/dashboard/allnotes/:userId",
      icon:<IoIosAddCircleOutline />
    },
    {
      text:"add notes",
      path:"/dashboard/addnotes/:userId",
      icon:<MdOutlineAddTask />
    }
  ]

  const navigate = useNavigate()
  const { setCurrentuser } = useContext(GlobalcontextApi)

  console.log(id)

  const fdata = async () => {
    const {data} = await axiosInstance.get(`/users/${id}`)
    setCurrentuser(data)
  }

  useEffect(()=>{
    fdata()
  },[])

  const logout=()=>{
    localStorage.removeItem("jwt_token")
    setCurrentuser(null)
    navigate("/")
    toast.success("Successfully Logged out",{position:"top-right"})
  }

  return (
    <div className='w-full h-[89vh] flex'>
      <div className='w-[20%] h-full bg-white'>
        <ul className='w-full h-[80%] flex flex-col items-center gap-3 pt-5'>
          {
            dashboardlist.map((ele,index)=>{
              return(
                <li key={index+1} className='w-[80%] text-center rounded-lg font-bold text-lg tracking-widest py-3'>
                  <NavLink
                    className="flex w-full h-full items-center justify-start gap-3 ps-3 text-gray-600 capitalize"
                    to={ele.path}
                  >
                    {ele.icon} {ele.text}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>

        <div className='w-full h-25 flex items-center justify-center'>
          <button
            className='px-15 py-3 rounded-lg text-lg font-light border border-black flex items-center gap-3 bg-[#7E3AF2] text-white cursor-pointer'
            onClick={logout}
          >
            <IoMdLogOut /> Logout
          </button>
        </div>
      </div>

      <div className='w-[80%] h-full bg-green-200'>
        <Outlet/>
      </div>
    </div>
  )
}

export default UserDashboard