import React from 'react'
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { About, Home, Portfolio, Services }from './container';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    </Router>
  )
}

export default App