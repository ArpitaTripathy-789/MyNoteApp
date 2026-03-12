import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoteCard = ({ data, deleteNotes }) => {

  const handleDelete = () => {
    deleteNotes(data.id)
  }
    const navigate = useNavigate()

  return (
    <div className="max-w-sm mx-auto mt-6 bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
      <div className="p-4">

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Title : {data.title}
        </h3>

        <p className="text-gray-600 mb-3">
          {data.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
            {data.tags}
          </span>
        </div>

        <div className="flex justify-end gap-2">
       <button
      onClick={() => navigate(`/dashboard/updatenote/${data.id}`)}
      className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium"
       >
       Update
       </button>

          <button
            onClick={handleDelete}
            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  )
}

export default NoteCard