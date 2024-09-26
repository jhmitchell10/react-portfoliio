import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './app';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './index.css'; // Import your CSS

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<AboutMe />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contact" element={<Contact />} />
                <Route path="resume" element={<Resume />} />
            </Route>
        </Routes>
    </Router>
);
