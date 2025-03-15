// src/App.js
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// 今後追加するページ（例：BlogListPage）もここでインポートできます

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 例: <Route path="/blog" element={<BlogListPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
