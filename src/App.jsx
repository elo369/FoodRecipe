import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Favorites from './pages/favourite'
import Details from './pages/details'
import Home from './pages/home'
import { Route, Routes } from 'react-router'

function App() {

  return (
   
     <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
         <Navbar/>
         <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/recipe-item/:id" element={<Details/>}/>
         </Routes>
      </div>
     </div>
    
  )
}

export default App
