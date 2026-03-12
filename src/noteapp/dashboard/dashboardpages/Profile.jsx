import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../../AxiosInstance/axiosinstance'

const Profile = () => {

  const { userId } = useParams()
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const fdata = async () => {
    const { data } = await axiosInstance.get(`/users/${userId}`)
    setUser(data)
  }

  useEffect(() => {
    fdata()
  }, [])

  const deleteUser = async () => {
    await axiosInstance.delete(`/users/${userId}`)
    navigate("/")
    localStorage.removeItem("jwt_token")
  }

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-cyan-100 p-6">
      
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={user.image}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-md object-cover"
          />
        </div>

        {/* User Details */}
        <div className="mt-6 text-center space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">
            {user.username}
          </h2>

          <p className="text-gray-600">
            <span className="font-semibold">Age:</span> {user.age}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition">
            <Link to={`/dashboard/updateprofile/${userId}`}>Update Profile</Link>
          </button>

          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
            onClick={deleteUser}
          >
            Delete Profile
          </button>

        </div>

      </div>

    </div>
  )
}

export default Profile