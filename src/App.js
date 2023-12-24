import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ChatComponent from './chatComponent/ChatComponent'
import AppNavbar from './Navbar/AppNavbar'
import FeaturesComponent from './featuresComponent/FeaturesComponent'
import ContactUsComponent from './contactUs/ContactUsComponent'

function App() {
  return (

    <BrowserRouter>
    <AppNavbar/>
    <Routes>
      <Route path='/' element={<ChatComponent/>}/>
      <Route path='/features' element={<FeaturesComponent/>}/>
      <Route path='/contact' element={<ContactUsComponent/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
