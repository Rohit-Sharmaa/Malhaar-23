import React from 'react'
import Navbar from './Sections/Navbar/Navbar';
import Header from './Sections/Header/Header';
import { Event } from 'react-toastify/dist/core/eventManager';


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