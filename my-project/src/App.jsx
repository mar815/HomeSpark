import React from 'react';
import './App.css';
import MortgageCalculator from './MortgageCalculator';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <h2 className=" text-3xl font-bold text-left">Homespark</h2>
        <div className="flex-grow">
          <MortgageCalculator />
        </div>
      </div>
    </>
  );
}

export default App;
