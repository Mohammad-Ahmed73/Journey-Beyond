import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/global-style.css';
import './assets/css/fonts.css';
import './assets/css/style.css';
import Header from './components/Navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem.jsx';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ecosystem' element={<Ecosystem />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
