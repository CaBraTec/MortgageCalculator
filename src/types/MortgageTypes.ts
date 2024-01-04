export interface MortgagePayment
{
    interest: number;
    principal: number;
    remainingDebt: number;
}

export interface MortgagePayments
{
    totalInterest: number;
    xMax: number;
    yMax: number;
    payments: MortgagePayment[];
}

export interface MortgageInformation
{
    propertyValue: number;
    mortgageInsuranceRate: number;
    interestRate: number;
    downPayment: number;
    mortgageLength: number;
    biweeklyPayments: number;
    additionalPayments: AdditionalPayment[];
}

export interface AdditionalPayment
{
    paymentValue: number;
    doneAfterMonth: number;
}