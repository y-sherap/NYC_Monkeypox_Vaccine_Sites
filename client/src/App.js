// import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
// import axios from 'axios'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import FAQPage from './pages/FAQPage'
import ClinicsPage from './pages/ClinicsPage'
import ReviewsPage from './pages/ReviewsPage'

const App = () => {

  // const [boroughs, setBoroughs] = useState([])

  // useEffect(() => {
  //   const getBoroughs = async () => {
  //     const response = await axios.get('http://localhost:3001/borough')
  //     setBoroughs(response.data)
  //   }
  //   getBoroughs()
  // }, [])

return (
  <div className="App">
    <header className="App-header">
      <NavBar />
    </header>
    {/* <main> */}
     <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="faq" element={ <FAQPage /> } /> 
       <Route path="/clinics" element={ <ClinicsPage /> } />
        <Route path="/reviews" element={ <ReviewsPage /> } />   
       </Routes> 
    {/* </main> */}
  </div>
)
}

export default App