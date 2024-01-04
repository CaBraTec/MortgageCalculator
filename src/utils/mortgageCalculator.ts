import { AdditionalPayment, MortgageInformation, MortgagePayment, MortgagePayments } from "../types/MortgageTypes";

export function calculateMortgagePayments(
    mortgageInfo: MortgageInformation
  ): MortgagePayments {
    let yMax = 0;
    // Assuming payments are made every two weeks
    const paymentFrequency = mortgageInfo.biweeklyPayments;
  
    // Convert yearly interest rate to to periodic interest rate (e.g. year -> biweekly)
    const interestRateForEachPayment = mortgageInfo.interestRate / 100 / paymentFrequency;

  
    // Calculate the loan amount (property value - down payment)
    let loanAmountBeforeInsurancePremium = mortgageInfo.propertyValue - mortgageInfo.downPayment;

    const mortgageInsurancePremium = loanAmountBeforeInsurancePremium * (mortgageInfo.mortgageInsuranceRate / 100);

    let loanAmount = loanAmountBeforeInsurancePremium + mortgageInsurancePremium;
  
    // Calculate the number of payments
    const numberOfPayments = mortgageInfo.mortgageLength * paymentFrequency;
  
    // Calculate the mortgage payment using the formula for an amortizing loan
    const defaultMortgagePayment =
      (loanAmount * interestRateForEachPayment) /
      (1 - Math.pow(1 + interestRateForEachPayment, -numberOfPayments));
  
    // Initialize variables
    let totalInterest = 0;
    const payments: MortgagePayment[] = [];

    const additionalPaymentValues = organizePayments(numberOfPayments, mortgageInfo.additionalPayments);
  
    // Calculate the mortgage payments and store the results
    for (let paymentNumber = 1; paymentNumber <= numberOfPayments; paymentNumber++) {
      const interestPayment = loanAmount * interestRateForEachPayment;

      // if we are finishing off the debt before the end of the loan, don't overpay
      const mortgagePayment = defaultMortgagePayment < (loanAmount + interestPayment)
        ? defaultMortgagePayment 
        : loanAmount + interestPayment;

      const principalPayment = mortgagePayment - interestPayment;
  
      // Update the loan amount for the next iteration
      loanAmount = loanAmount - principalPayment - additionalPaymentValues[paymentNumber];
  
      // Accumulate total interest
      totalInterest += interestPayment;

      if(yMax < interestPayment + principalPayment) {
        yMax = interestPayment + principalPayment;
      }
  
      // Store payment details
      payments.push({
        interest: interestPayment,
        principal: (principalPayment + additionalPaymentValues[paymentNumber]),
        remainingDebt: loanAmount,
      });
    }
  
    return {
      totalInterest,
      xMax: payments.length,
      yMax: yMax,
      payments,
    };
  }

  export function organizePayments(numberOfPayments: number, payments: AdditionalPayment[]) {
    let additionalPayments = Array(numberOfPayments+1).fill(0);

    payments.forEach(payment => {
      additionalPayments[payment.doneAfterMonth] += payment.paymentValue;
    })

    return additionalPayments;
  }