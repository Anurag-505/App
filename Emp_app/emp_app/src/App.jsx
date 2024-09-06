import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import View from './Components/View'
import Add from './Components/Add'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/add' element={<Add />} />   
        <Route path='/view' element={<View />} />
        <Route path='/home' element={<Home />} />
        </Routes>
    
    </>
  )
}

export default App
