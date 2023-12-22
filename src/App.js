import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Discussion from "./Discussion";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:category" element={<Category />} />
                    <Route path="/article/:id" element={<Discussion />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

