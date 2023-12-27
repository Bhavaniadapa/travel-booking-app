import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListingDetailPage from './pages/ListingDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing/:id" element={<ListingDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
