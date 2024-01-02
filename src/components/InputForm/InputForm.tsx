import React, { useState } from 'react';
import { MortgagePayment } from '../../types/MortgageTypes';
import './InputForm.css';

interface InputFormProps {
  onCalculate: (data: MortgagePayment) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<MortgagePayment>({
    interest: 0,
    principal: 0,
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
        Interest:
        <input type="number" name="interest" value={formData.interest} onChange={handleChange} />
      </label>
      <label>
        Principal:
        <input type="number" name="principal" value={formData.principal} onChange={handleChange} />
      </label>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default InputForm;