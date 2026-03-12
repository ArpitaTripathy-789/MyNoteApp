import React from 'react'
import { ToastContainer } from 'react-toastify'
import NoteAppHome from './noteapp/NoteAppHome'



const App = () => {
  return (
    <div>
        <ToastContainer/>
        <NoteAppHome/>
    </div>
  )
}

export default App