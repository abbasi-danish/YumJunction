import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import { NavBar } from './components/Navbar/navbar';

import Recipe2 from './pages/Recipe2/Recipe2';


import Recipe1 from './pages/Recipe1/Recipe1';
import Recipe5 from './pages/Recipe5/Recipe5';
import Recipe3 from './pages/Recipe3/Recipe3';
import Recipe4 from './pages/Recipe4/Recipe4';
import Recipe6 from './pages/Recipe6/Recipe6';
import Recipe7 from './pages/Recipe7/Recipe7';

import TeamLanding from './pages/TeamLanding/TeamLanding';

import { GroceryListProvider } from './components/GroceryList/grocerylistprovider';



function App() {
    return (
        <GroceryListProvider>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path='/recipe2' element={<Recipe2 />} />

                <Route path="/recipe1" element={<Recipe1 />} />
                <Route path="/teamlanding" element={<TeamLanding />} />
                <Route path="/recipe5" element={<Recipe5 />} />
                <Route path="/recipe3" element={<Recipe3 />} />
                <Route path="/recipe4" element={<Recipe4 />} />
                <Route path="/recipe6" element={<Recipe6 />} />
                <Route path="/recipe7" element={<Recipe7 />} />

            </Routes>
        </Router>
        </GroceryListProvider>
    );
}

export default App;