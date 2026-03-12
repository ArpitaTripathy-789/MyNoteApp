import React, { useContext } from 'react'
import { CiCircleInfo } from 'react-icons/ci'
import { IoHelpBuoyOutline, IoHome } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import { GlobalcontextApi } from '../../context/Globalcontext'

const Navbar = () => {
    const navlist=[
        {
            text:"home",
            path:"/",
            icon:<IoHome />
        },
        {
            text:"about",
            path:"/about",
            icon:<CiCircleInfo />
        },
        {
            text:"contact",
            path:"/contact",
            icon:<MdEmail />
        },
        {
            text:"help",
            path:"/help",
            icon:<IoHelpBuoyOutline />
        },
    ]

    const {currentuser}=useContext(GlobalcontextApi)
    console.log(currentuser)

  return (
   <nav className=" w-full h-19.5 bg-slate-900 text-gray-200 shadow-lg flex justify-around">
      
      <div className='w-[10%] h-full flex items-center justify-center text-3xl font-extrabold '>
        Logo
      </div>

      <ul className='w-[50%] h-full flex items-center justify-around capitalize'>
        {
          navlist.map((ele,index)=>{
            return(
              <li key={index} className='px-5 py-4 rounded-2xl cursor-pointer text-lg'>
                <NavLink className="flex items-center gap-3" to={ele.path}>
                  {ele.icon} {ele.text}
                </NavLink>
              </li>
            )
          })
        }
      </ul>

      <div className='w-[10%] h-full flex items-center justify-center'>
        {
          !currentuser ?
          <button className="px-6 py-2 rounded-md text-white font-medium bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 transition duration-300 shadow-md">
            <Link to="/login">Login</Link>
          </button>
          :
          <div className='w-19.5 h-[80%] rounded-full flex items-center justify-center text-5xl border'>
            <span className='transform -translate-y-2.5'>
              {currentuser.username.slice(0,1)}
            </span>
          </div>
        }
      </div>

    </nav>
  )
}

export default Navbar