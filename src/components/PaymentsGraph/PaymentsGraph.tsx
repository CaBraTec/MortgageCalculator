import React from "react";
import { BarChart, Bar, XAxis, YAxis, 
    CartesianGrid, Tooltip, Legend } from 'recharts';  
import { MortgagePayment } from "../../types/MortgageTypes";

interface PaymentGraphProps {
    payments: MortgagePayment[];
}

const PaymentsGraph: React.FC<PaymentGraphProps> = (mortgagePayments: PaymentGraphProps) => {
    return (
        <BarChart
            width={window.innerWidth}
            height={500}
            data={mortgagePayments.payments}
            margin={{ top: 20, right: 30, left: 20, bottom: 15 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="index" />
            <YAxis />
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="top" align="right"/>
            <Bar dataKey="interest" stackId="a" fill="#8884d8" name="Interest" />
            <Bar dataKey="principal" stackId="a" fill="#82ca9d" name="Principal" />
        </BarChart>
    );
}

export default PaymentsGraph;