import React, { useState } from 'react'
import AppContext from './AppContext'

function AppState({children}) {
    const [formData,setFormData] = useState([])
  return (
    <AppContext.Provider value={{formData,setFormData}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState