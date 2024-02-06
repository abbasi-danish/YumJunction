import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Recipe2 from './pages/Recipe2/Recipe2';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path='/recipe2' element={<Recipe2 />} />
            </Routes>
        </Router>
    );
}

export default App;