import { useState } from 'react'
import './assets/css/App.css'
import { Home } from './pages/Home'
import { Subscribe } from './pages/Subscribe'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <HashRouter> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/subscribe' element={<Subscribe />} />
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
