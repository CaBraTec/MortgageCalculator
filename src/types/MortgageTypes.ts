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