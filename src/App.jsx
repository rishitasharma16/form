import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Form from './pages/Form'
import ReadData from './pages/ReadData'

function App() {
  return (
   <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path='/data' element={<ReadData/>}/>
   </Routes>
  )
}

export default App