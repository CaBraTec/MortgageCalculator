import React, { useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import { MortgageInformation, MortgagePayments } from './types/MortgageTypes';
import { calculateMortgagePayments } from './utils/mortgageCalculator';
import './App.css';
import PaymentsTable from './components/PaymentsTable/PaymentsTable';
import PaymentsGraph from './components/PaymentsGraph/PaymentsGraph';
import Notes from './components/Notes/Notes';

const App: React.FC = () => {
  const [mortgagePayments, setMortgagePayments] = useState<MortgagePayments | null>(null);
  const [mortgageInfo, setMortgageInfo] = useState<MortgageInformation | null>(null);

  const handleCalculate = (inputData: MortgageInformation) => {
    const calculatedData = calculateMortgagePayments(inputData);
    setMortgageInfo(inputData);
    setMortgagePayments(calculatedData);
  };

  return (
    <div className="app">
      <div className='top-container'>
        <div className="form-container">
          <InputForm onCalculate={handleCalculate} />
        </div>
        <div className="table-container">
          {mortgagePayments && (
            <PaymentsTable payments={mortgagePayments.payments} />
          )}
        </div>
        <div className='notes-container'>
          {mortgagePayments && mortgageInfo && (
            <Notes mortgageInfo={mortgageInfo} mortgagePayments={mortgagePayments} />
          )}
        </div>
      </div>
      <div className="bottom-container">
        {mortgagePayments && (
          <PaymentsGraph payments={mortgagePayments.payments}/>
        )}
      </div>
    </div>
  );
}

export default App;
