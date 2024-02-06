import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Recipe1 from './pages/Recipe1/Recipe1';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/recipe1" element={<Recipe1 />} />
            </Routes>
        </Router>
    );
}

export default App;