import { AdditionalPayment, MortgageInformation, MortgagePayment, MortgagePayments } from "../types/MortgageTypes";

export function calculateMortgagePayments(mortgageInfo: MortgageInformation): MortgagePayments {
  const paymentFrequency = mortgageInfo.biweeklyPayments;
  const interestRateForEachPayment = mortgageInfo.interestRate / 100 / paymentFrequency;

  let loanAmount = calculateLoanAmount(mortgageInfo);

  const numberOfPayments = mortgageInfo.mortgageLength * paymentFrequency;
  const defaultMortgagePayment = calculateDefaultMortgagePayment(loanAmount, interestRateForEachPayment, numberOfPayments);

  let totalInterest = 0;
  let yMax = 0;
  const payments: MortgagePayment[] = [];

  const additionalPaymentValues = organizePayments(numberOfPayments, mortgageInfo.additionalPayments);

  calculateAndStorePayments(
    numberOfPayments,
    loanAmount,
    defaultMortgagePayment,
    interestRateForEachPayment,
    additionalPaymentValues,
    payments,
    totalInterest,
    yMax
  );

  return {
    totalInterest,
    xMax: payments.length,
    yMax,
    payments,
  };
}

function calculateLoanAmount(mortgageInfo: MortgageInformation): number {
  const loanAmountBeforeInsurancePremium = mortgageInfo.propertyValue - mortgageInfo.downPayment;
  const mortgageInsurancePremium = loanAmountBeforeInsurancePremium * (mortgageInfo.mortgageInsuranceRate / 100);
  return loanAmountBeforeInsurancePremium + mortgageInsurancePremium;
}

function calculateDefaultMortgagePayment(loanAmount: number, interestRateForEachPayment: number, numberOfPayments: number): number {
  return (loanAmount * interestRateForEachPayment) / (1 - Math.pow(1 + interestRateForEachPayment, -numberOfPayments));
}

function calculateAndStorePayments(
  numberOfPayments: number,
  loanAmount: number,
  defaultMortgagePayment: number,
  interestRateForEachPayment: number,
  additionalPaymentValues: number[],
  payments: MortgagePayment[],
  totalInterest: number,
  yMax: number
) {
  Array.from({ length: numberOfPayments }, (_, paymentNumber) => {
    const interestPayment = loanAmount * interestRateForEachPayment;
    const mortgagePayment = defaultMortgagePayment < loanAmount + interestPayment
      ? defaultMortgagePayment
      : loanAmount + interestPayment;
    const principalPayment = mortgagePayment - interestPayment;

    loanAmount = loanAmount - principalPayment - additionalPaymentValues[paymentNumber];
    totalInterest += interestPayment;

    yMax = Math.max(yMax, interestPayment + principalPayment);

    payments.push({
      index: paymentNumber + 1,
      interest: parseFloat(interestPayment.toFixed(2)),
      principal: parseFloat((principalPayment + additionalPaymentValues[paymentNumber]).toFixed(2)),
      remainingDebt: parseFloat(loanAmount.toFixed(2)),
    });
  });
}

export function organizePayments(numberOfPayments: number, payments: AdditionalPayment[]): number[] {
  return payments.reduce((additionalPayments, payment) => {
    additionalPayments[payment.doneAfterMonth] += payment.paymentValue;
    return additionalPayments;
  }, Array(numberOfPayments + 1).fill(0));
}
