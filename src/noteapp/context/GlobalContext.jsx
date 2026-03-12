import React, { createContext, useState } from 'react'

export const GlobalcontextApi=createContext("")

const Globalcontext = ({children}) => {
    const [currentuser,setCurrentuser]=useState(null)
  return (
    <GlobalcontextApi.Provider value={{currentuser,setCurrentuser}}>
        { children}
    </GlobalcontextApi.Provider>
  )
}

export default Globalcontext