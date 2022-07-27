import './styles/App.css'
// import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import ReviewsComponent from './components/ReviewsComponent'
import NavBar from './components/NavBar'


const App = () => {

  return (
    <div className="App">
      <header>
        <h1>Hope this works</h1>
       <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          {/* <Route path="reviews" element={ <ReviewsComponent reviews={ reviews } /> } /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App;
