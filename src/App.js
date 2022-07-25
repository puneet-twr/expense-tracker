import { useState } from 'react';
import ExpanseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import Card from './components/Card';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // function to help passing the data from the child components
  //  to the parent components, by introducing props functions

  const addExpenseHandler=(expense)=>{  
    setExpenses((prevExpense)=>{
      return [expense, ...prevExpense]
    });
  };
  return (
    <Card className="App">
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <Expenses items={expenses}></Expenses>
    </Card>
  );
}

export default App;
