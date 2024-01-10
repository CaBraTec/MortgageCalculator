import React from "react";
import { MortgageInformation, MortgagePayments } from "../../types/MortgageTypes";
import './Notes.css';
import Note from "../Note/Note";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

interface NotesProps {
    mortgageInfo: MortgageInformation;
    mortgagePayments: MortgagePayments;
}

const Notes: React.FC<NotesProps> = (notesProps: NotesProps) => {
    
    const notes = [
        {
            message: `Without any additional payment, your mortgage will finish in approximately ${(notesProps.mortgagePayments.payments.length / 26).toFixed(0)} years.`,
            icon: faInfoCircle
        },        
        {
            message: `Without any additional payment, your mortgage will finish in approximately ${(notesProps.mortgagePayments.payments.length / 26).toFixed(0)} years.`,
            icon: faInfoCircle
        },        
        {
            message: `Without any additional payment, your mortgage will finish in approximately ${(notesProps.mortgagePayments.payments.length / 26).toFixed(0)} years.`,
            icon: faInfoCircle
        },        
        {
            message: `Without any additional payment, your mortgage will finish in approximately ${(notesProps.mortgagePayments.payments.length / 26).toFixed(0)} years.`,
            icon: faInfoCircle
        },        
        {
            message: `Without any additional payment, your mortgage will finish in approximately ${(notesProps.mortgagePayments.payments.length / 26).toFixed(0)} years.`,
            icon: faInfoCircle
        },        
        {
            message: `Without any additional payment, your mortgage will finish in approximately ${(notesProps.mortgagePayments.payments.length / 26).toFixed(0)} years.`,
            icon: faInfoCircle
        },        
        {
            message: `Without any additional payment, your mortgage will finish in approximately ${(notesProps.mortgagePayments.payments.length / 26).toFixed(0)} years.`,
            icon: faInfoCircle
        },        
        {
            message: `Without any additional payment, your mortgage will finish in approximately ${(notesProps.mortgagePayments.payments.length / 26).toFixed(0)} years.`,
            icon: faInfoCircle
        },        
        {
            message: `Blablabla.`,
            icon: faInfoCircle
        }
    ];
    
    return (
        <div className="notes">
            <p className="title">INSIGHTS</p>
            {notes.map((note, key) => (
                <Note message={note.message}/>
            ))}
        </div>
    )
}

export default Notes;