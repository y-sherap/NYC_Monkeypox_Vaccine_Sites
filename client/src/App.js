import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import axios from 'axios'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import FAQPage from './pages/FAQPage'
import BoroughClinicDetails from './components/BoroughClinicDetails'
// import ClinicsPage from './pages/ClinicsPage'
// import ReviewsPage from './pages/ReviewsPage'

const App = () => {

  const [boroughs, setBoroughs] = useState([])
  const [clinics, setClinics] = useState([])

  useEffect(() => {
    const getBoroughs = async () => {
      const response = await axios.get('http://localhost:3001/api/boroughs')
      console.log(response.data.boroughs)
      setBoroughs(response.data.boroughs)
      // narrowing down the data that i need to access from my database
    }
    getBoroughs()
  }, [])

  useEffect(() => {
    const getClinics = async () => {
      const response = await axios.get('http://localhost:3001/api/clinics')
      console.log(response.data.clinics)
      setClinics(response.data.clinics)
      // narrowing down the data that i need to access from my database
    }
    getClinics()
  }, [])

return (
  <div className="App">
    <header className="App-header">
      <NavBar />
    </header>

     <Routes>
        <Route path="/" element={ <Home boroughs={boroughs}  /> } />
        <Route path="about" element={ <About /> } />
        <Route path="faq" element={ <FAQPage /> } /> 
        <Route 
          path="borough/:id"
          element={
            <BoroughClinicDetails
              boroughs={boroughs}
              clinics={clinics}
              />
          }
          />
       </Routes> 
  </div>
)
}

export default App