import React from 'react';
import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{

    // receiving props from the child component 
    const saveExpenseDataHandler=(enteredExpenseData)=>{  
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
    
    
    return( 
        // form to take input from user for a new Expense 
    <div className="new-expense">
        {/* {expenseForm} */}
        {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
        {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>)
}

export default NewExpense;