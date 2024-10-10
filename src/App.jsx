import { useState } from 'react'
import './assets/css/App.css'
import { Home } from './pages/Home'
import { Subscribe } from './pages/Subscribe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/subscribe' element={<Subscribe />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
