import React, { useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import { MortgageInformation, MortgagePayments } from './types/MortgageTypes';
import { calculateMortgagePayments } from './utils/mortgageCalculator';
import './App.css';

const App: React.FC = () => {
  const [MortgagePayments, setMortgagePayments] = useState<MortgagePayments | null>(null);

  const handleCalculate = (inputData: MortgageInformation) => {
    const calculatedData = calculateMortgagePayments(inputData);
    setMortgagePayments(calculatedData);
  };

  return (
    <div className="app">
      <div className="form-container">
        <InputForm onCalculate={handleCalculate} />
      </div>
      <div className="content-container">
        <div className="table-container">
          {MortgagePayments && (
            <>
              <p>Total Interest: {MortgagePayments.totalInterest}</p>
              <p>xMax: {MortgagePayments.xMax}</p>
              <p>yMax: {MortgagePayments.yMax}</p>
              <table>
                <tr>
                  <td>Payment Number</td>
                  <td>Principal</td>
                  <td>Interest</td>
                </tr>
                {MortgagePayments.payments.map((item, key) => (
                  <tr key={key}>
                    <td>{key+1}</td>
                    <td>{item.interest}</td>
                    <td>{item.principal}</td>
                  </tr>
                  ))}
              </table>
            </>
          )}
        </div>
        <div className="graph-container">
        {MortgagePayments && (
            <>
              <h1>Graph TBD</h1>
            </>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default App;
