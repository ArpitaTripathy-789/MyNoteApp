import React, { useContext } from 'react'
import { GlobalcontextApi } from '../../context/Globalcontext'

const DashboardHome = () => {

    const {currentuser}=useContext(GlobalcontextApi)
    console.log(currentuser)
  return (
    <div>DashboardHome</div>
  )
}

export default DashboardHome