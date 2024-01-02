import React, { useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import { MortgagePayment } from './types/MortgageTypes';
import './App.css';

const App: React.FC = () => {
  const [MortgagePayment, setMortgagePayment] = useState<MortgagePayment | null>(null);

  // to remove
  const calculateMortgage = (inputData: MortgagePayment) => {
    const mockMortgagePayment: MortgagePayment = {
      interest: 4.81,
      principal: inputData.principal+5,
    };
    return mockMortgagePayment;
  }

  const handleCalculate = (inputData: MortgagePayment) => {
    const calculatedData = calculateMortgage(inputData);
    setMortgagePayment(calculatedData);
  };

  return (
    <div className="app">
      <InputForm onCalculate={handleCalculate} />
      {MortgagePayment && (
        <>
          <h2>Calculated</h2>
          {MortgagePayment.interest}<br />
          {MortgagePayment.principal}
        </>
      )}
    </div>
  );
}

export default App;
