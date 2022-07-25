import React, { Component, useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
// Component to show a single Expense (Date, title and Price)
// Importing styled date from 'ExpenseDate' component
// Taking the Details via props and States
function ExpenseItem(props){    
    
    
    return (
        <li className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount} ₹</div>
            </div>
            
        </li>
    )
}
export default ExpenseItem;