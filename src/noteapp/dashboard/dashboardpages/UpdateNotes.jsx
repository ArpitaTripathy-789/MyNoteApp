import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../../AxiosInstance/axiosinstance'
import { toast } from 'react-toastify'

const UpdateNotes = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [formdata, setFormdata] = useState({
    title: "",
    description: "",
    tags: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormdata({ ...formdata, [name]: value })
  }

  const fetchNote = async () => {
    try {

      const { data } = await axiosInstance.get(`/notes/${id}`)
      setFormdata(data)

    } catch (error) {

      toast.error("Failed to fetch note")

    }
  }

  useEffect(() => {
    fetchNote()
  }, [])

  const handleUpdate = async (e) => {

    e.preventDefault()

    try {

      await axiosInstance.put(`/notes/${id}`, formdata)

      toast.success("Note updated successfully")

      navigate(-1)

    } catch (error) {

      toast.error("Update failed")

    }

  }

  return (

    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">

      <h2 className="text-2xl font-semibold mb-4">Update Note</h2>

      <form onSubmit={handleUpdate} className="space-y-4">

        <input
          name="title"
          value={formdata.title}
          onChange={handleInput}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          value={formdata.description}
          onChange={handleInput}
          className="w-full border p-2 rounded"
        />

        <input
          name="tags"
          value={formdata.tags}
          onChange={handleInput}
          className="w-full border p-2 rounded"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Note
        </button>

      </form>

    </div>
  )
}

export default UpdateNotes