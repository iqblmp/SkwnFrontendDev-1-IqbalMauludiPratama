
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home';

function App() {
  return (
       <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
  );
}

export default App;