import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';


import Recipe2 from './pages/Recipe2/Recipe2';


import Recipe1 from './pages/Recipe1/Recipe1';

import TeamLanding from './pages/TeamLanding/TeamLanding';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path='/recipe2' element={<Recipe2 />} />

                <Route path="/recipe1" element={<Recipe1 />} />

                <Route path="/teamlanding" element={<TeamLanding />} />

            </Routes>
        </Router>
    );
}

export default App;