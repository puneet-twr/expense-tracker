import React from 'react';
import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // functions to set states
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // console.log(enteredTitle);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=event=>{
        setEnteredDate(event.target.value);
    }

    // creating a new Expense object from entered 
    // title, amount, and date
    const submitHandler=(event)=>{  
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);   //Passing data to the parent component through props
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        
    }
    const cancelButtonHandler=()=>{
        props.cancelFunc();
    }
    return(
   <form action="" onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" value={enteredTitle} name="" id="" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel} >Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;
