import React, { useState } from 'react';
import { MortgageInformation, MortgagePayment } from '../../types/MortgageTypes';
import './InputForm.css';

interface InputFormProps {
  onCalculate: (data: MortgageInformation) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<MortgageInformation>({
    propertyValue: 779000,
    mortgageInsuranceRate: 3.15,
    interestRate: 4.81,
    downPayment: 112000,
    mortgageLength: 25,
    biweeklyPayments: 26,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: parseFloat(value) || 0 }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <label>
        Property Value:
        <input type="number" name="propertyValue" value={formData.propertyValue} onChange={handleChange} />
      </label>
      <label>
        Mortgage Insurance Rate:
        <input type="number" name="mortgageInsuranceRate" value={formData.mortgageInsuranceRate} onChange={handleChange} />
      </label>
      <label>
        Interest Rate:
        <input type="number" name="interestRate" value={formData.interestRate} onChange={handleChange} />
      </label>
      <label>
        Down Payment:
        <input type="number" name="downPayment" value={formData.downPayment} onChange={handleChange} />
      </label>
      <label>
        Mortgage Length:
        <input type="number" name="mortgageLength" value={formData.mortgageLength} onChange={handleChange} />
      </label>
      <label>
        Biweekly Payments:
        <input type="number" name="biweeklyPayments" value={formData.biweeklyPayments} onChange={handleChange} />
      </label>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default InputForm;