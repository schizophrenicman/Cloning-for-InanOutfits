import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignupModal from './components/SignupModal';
import HeroSection from './components/HeroSection';
import TrendingClothes from './components/TrendingClothes';
import CartPage from './components/CartPage';

function HomePage({ onSignupClick }) {
  return (
    <>
      <Header onSignupClick={onSignupClick} />
      <main>
        <HeroSection />
        <TrendingClothes />
      </main>
    </>
  );
}

function App() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleSignupClick = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onSignupClick={handleSignupClick} />} 
          />
          <Route 
            path="/cart" 
            element={<CartPage />} 
          />
        </Routes>
        <SignupModal 
          isOpen={isSignupModalOpen} 
          onClose={handleCloseModal} 
        />
      </div>
    </Router>
  );
}

export default App;
