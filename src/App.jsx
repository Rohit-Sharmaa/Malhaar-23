import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Sections/Navbar/Navbar'
import './App.css'
import Header from './Sections/Header/Header'
import Event from './Sections/event/event'
const App = () => {
  return (
      <>
      <Navbar/>
      <Header/>
      <Event/>
      
      
      </>
  )
}

export default App;