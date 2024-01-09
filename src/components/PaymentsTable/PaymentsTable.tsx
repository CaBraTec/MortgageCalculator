import React from 'react';
import { MortgagePayment } from '../../types/MortgageTypes';
import './PaymentsTable.css';

interface PaymentTableProps {
    payments: MortgagePayment[];
}

const PaymentsTable: React.FC<PaymentTableProps> = (mortgagePayments: PaymentTableProps) => {
    return (
        <table className='payments-table'>
            <tr className='table-head'>
                <td>Payment Number</td>
                <td>Principal</td>
                <td>Interest</td>
                <td>Total</td>
                <td>Remaining Debt</td>
            </tr>
            {mortgagePayments.payments.map((item, key) => (
                <tr key={key}>
                <td>{key+1}</td>
                <td>${item.interest}</td>
                <td>${item.principal}</td>
                <td>${(item.principal + item.interest).toFixed(2)}</td>
                <td>${item.remainingDebt}</td>
                </tr>
            ))}
        </table>
    )
}

export default PaymentsTable;