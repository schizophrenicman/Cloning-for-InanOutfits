import React, { useState } from 'react';
import Header from './components/Header';
import SignupModal from './components/SignupModal';
import HeroSection from './components/HeroSection';
import TrendingClothes from './components/TrendingClothes';

function App() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleSignupClick = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSignupClick={handleSignupClick} />
      <main>
        <HeroSection />
        <TrendingClothes />
      </main>
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default App;
