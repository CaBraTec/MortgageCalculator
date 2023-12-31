import { MortgagePayment, MortgagePayments } from "../types/MortgageTypes";

export function calculateMortgagePayments(
    propertyValue: number,
    mortgageInsuranceRate: number,
    interestRate: number,
    downPayment: number,
    mortgageLength: number,
    biweeklyPayments: number
  ): MortgagePayments {
    let yMax = 0;
    // Assuming payments are made every two weeks
    const paymentFrequency = biweeklyPayments;
  
    // Convert yearly interest rate to a decimal
    const biweeklyInterestRate = interestRate / 100 / paymentFrequency;
  
    // Calculate the loan amount (property value - down payment)
    let loanAmountBeforeInsurancePremium = propertyValue - downPayment;

    const mortgageInsurancePremium = loanAmountBeforeInsurancePremium * (mortgageInsuranceRate / 100);

    let loanAmount = loanAmountBeforeInsurancePremium + mortgageInsurancePremium;
  
    // Calculate the number of payments
    const numberOfPayments = mortgageLength * paymentFrequency;
  
    // Calculate the mortgage payment using the formula for an amortizing loan
    const mortgagePayment =
      (loanAmount * biweeklyInterestRate) /
      (1 - Math.pow(1 + biweeklyInterestRate, -numberOfPayments));
  
    // Initialize variables
    let totalInterest = 0;
    const payments: MortgagePayment[] = [];
  
    // Calculate the mortgage payments and store the results
    for (let paymentNumber = 1; paymentNumber <= numberOfPayments; paymentNumber++) {
      const interestPayment = loanAmount * biweeklyInterestRate;
      const principalPayment = mortgagePayment - interestPayment;
  
      // Update the loan amount for the next iteration
      loanAmount -= principalPayment;
  
      // Accumulate total interest
      totalInterest += interestPayment;

      if(yMax < interestPayment + principalPayment) {
        yMax = interestPayment + principalPayment;
      }
  
      // Store payment details
      payments.push({
        interest: interestPayment,
        principal: principalPayment,
      });
    }
  
    return {
      totalInterest,
      xMax: payments.length,
      yMax: yMax,
      payments,
    };
  }