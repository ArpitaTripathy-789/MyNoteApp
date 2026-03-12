import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import NoteCard from './NoteCard'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../../AxiosInstance/axiosinstance'

const AllNotes = () => {
    const [allnotes,setAllnotes]=useState(null)
    const {userId}=useParams()
    const fetchallnotes=async () => {
        try {
            const {data}=await axiosInstance.get("/notes")
            const filterData=data.filter((note)=>note.userId===userId)
            setAllnotes(filterData)
        } catch (error) {
            toast.error("Something went wrong",{position:"top-center"})
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchallnotes()
    },[])
    // console.log(allnotes)
    const deleteNotes=async (notesid) => {
        try{
            const{data}=await axiosInstance.delete(`/notes/${notesid}`)
            toast.success("Notes Deleted successfully",{position:"top-right"})
            fetchallnotes()
        }catch(error){
            console.log(error)
            toast.error("Something went wrong",{position:"top-center"})
        }
    }
  return (
    <div className='w-full h-auto flex flex-wrap'>
        {
            allnotes?.map((note,index)=>{
                return(
                    <Fragment key={index}>
                        <NoteCard data={note} deleteNotes={deleteNotes}/>
                    </Fragment>
                )
            })
        }
    </div>
  )
}

export default AllNotes