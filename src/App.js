import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ChatComponent from './chatComponent/ChatComponent'
import AppNavbar from './Navbar/AppNavbar'
import FeaturesComponent from './featuresComponent/FeaturesComponent'
import ContactUsComponent from './contactUs/ContactUsComponent';
import GenerativeAIComponent from './imageAi/GenerativeAIComponent'
import HomeSection from './homeSection/HomeSection'

function App() {
  return (

    <BrowserRouter>
    <AppNavbar/>
    <Routes>
      <Route path='/' element={<HomeSection/>}/>
      <Route path='/features' element={<FeaturesComponent/>}/>
      <Route path='/contact' element={<ContactUsComponent/>}/>
      <Route path='/imageAi' element={<GenerativeAIComponent/>}/>
      <Route path='/textAi' element={<ChatComponent/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
