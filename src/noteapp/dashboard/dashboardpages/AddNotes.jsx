import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../../AxiosInstance/axiosinstance'

const AddNotes = () => {
    const[formdata,setFormdata]=useState({
        title:"",
        description:"",
        tags:""
    })
    const {userId}=useParams()
    const navigate=useNavigate()

    const handleInput=(e)=>{
        const{name,value}=e.target 
        setFormdata({...formdata,[name]:value})
    }

    const handleForm=async(e)=>{
        e.preventDefault()
        console.log(formdata)
        // api call
        try {
            const {data}=await axiosInstance.post("/notes",{...formdata,userId})
            toast.success("notes added",{position:"top-right"})
            setFormdata({
                title:"",
                description:"",
                tags:""
                })
                navigate(`/dashboard/allnotes/${userId}`)
        } catch (error) {
            toast.error("Something went wrong.",{position:"top-center"})
            console.log(error.message)
        }


    }



  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Note</h2>
      
      <form className="space-y-4" onSubmit={handleForm}>
        {/* Note Title */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name='title'
            value={formdata.title}
            placeholder="Enter note title"
            onChange={handleInput}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Note Description */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter note description"
            rows="4"
            name='description'
            value={formdata.description}
            onChange={handleInput}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="tags">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name='tags'
            value={formdata.tags}
            onChange={handleInput}
            placeholder="Enter tags separated by commas"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNotes