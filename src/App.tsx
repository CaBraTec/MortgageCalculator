import React, { useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import { MortgageInformation, MortgagePayments } from './types/MortgageTypes';
import { calculateMortgagePayments } from './utils/mortgageCalculator';
import './App.css';
import PaymentsTable from './components/PaymentsTable/PaymentsTable';
import { BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend } from 'recharts';

const App: React.FC = () => {
  const [mortgagePayments, setMortgagePayments] = useState<MortgagePayments | null>(null);

  const handleCalculate = (inputData: MortgageInformation) => {
    const calculatedData = calculateMortgagePayments(inputData);
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
      </div>
      <div className="bottom-container">
        {mortgagePayments && (
          <BarChart
            width={window.innerWidth}
            height={500}
            data={mortgagePayments.payments}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="interest" stackId="a" fill="#8884d8" name="Interest" />
            <Bar dataKey="principal" stackId="a" fill="#82ca9d" name="Principal" />
          </BarChart>
        )}
      </div>
    </div>
  );
}

export default App;
