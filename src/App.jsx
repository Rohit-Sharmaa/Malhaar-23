import React from 'react'
import Navbar from './Sections/Navbar/Navbar'
import Sponsors from './Sections/Sponsors/Sponsors'
import Header from './Sections/Header/Header'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Team from './Sections/Team/Team'


const App = () => {
  return (
    <main>
      
      <Router>
      <Navbar />
      <Header />
    
        <Routes>
          <Route path="sponsors" element={<Sponsors />}></Route>
          <Route path="team" element={<Team />}></Route>
        </Routes>
        {/* <Sponsors/> */}

      </Router>
    </main>
  )
}

export default App