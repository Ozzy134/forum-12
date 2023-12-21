import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CategoryPage from './CategoryPage';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/category/:category" element={<CategoryPage />} />*/}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
