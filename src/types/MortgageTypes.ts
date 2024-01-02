export interface MortgagePayment
{
    interest: number;
    principal: number;
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
}