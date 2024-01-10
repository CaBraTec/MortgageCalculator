import React from 'react';
import { MortgagePayment } from '../../types/MortgageTypes';
import './PaymentsTable.css';

interface PaymentTableProps {
    payments: MortgagePayment[];
}

const PaymentsTable: React.FC<PaymentTableProps> = (mortgagePayments: PaymentTableProps) => {
    let formatNumber = (number: number): string => number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
        <div className='table'>
            <table className='payments-table'>
                <thead>
                    <tr className='table-head'>
                        <td>Payment Number</td>
                        <td>Interest</td>
                        <td>Principal</td>
                        <td>Total</td>
                        <td>Remaining Debt</td>
                    </tr>
                </thead>
                <tbody>
                    {mortgagePayments.payments.map((item, key) => (
                        <tr key={key}>
                        <td>{key+1}</td>
                        <td>${formatNumber(item.interest)}</td>
                        <td>${formatNumber(item.principal)}</td>
                        <td>${formatNumber(item.principal + item.interest)}</td>
                        <td>${formatNumber(item.remainingDebt)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PaymentsTable;