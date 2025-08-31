import React from 'react';
import Header from './Header';

export default function Sale({ onSignupClick }) {
  return (
    <>
      <Header onSignupClick={onSignupClick} />
      <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Sale</h1>
          <p className="text-lg text-amber-700 text-center">Amazing deals on our products!</p>
        </div>
      </main>
    </>
  );
}
