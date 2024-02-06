import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Recipe1 from './pages/Recipe1/Recipe1';
import Recipe5 from './pages/Recipe5/Recipe5';
import Recipe3 from './pages/Recipe3/Recipe3';
import Recipe4 from './pages/Recipe4/Recipe4';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/recipe1" element={<Recipe1 />} />
                <Route path="/recipe5" element={<Recipe5 />} />
                <Route path="/recipe3" element={<Recipe3 />} />
                <Route path="/recipe4" element={<Recipe4 />} />
            </Routes>
        </Router>
    );
}

export default App;