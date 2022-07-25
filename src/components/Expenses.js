import './Expense.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
// Showing collectively All the expenses 
function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    //we can use two-way binding here by passing the filteredYear to the expenseFilter 
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    }
    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
    return(
        <div>
        
        <Card className="expenses">
            <ExpensesFilter onFilterChange={filterChangeHandler} value={filteredYear}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses} />
            {/* {expensesContent}  we made a seperate component for the filtered expenses List items */} 
            <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
    </div>
    )
}
export default Expenses;