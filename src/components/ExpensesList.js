import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList=(props)=>{
    let expensesContent = <h2>No Expenses Found!</h2>;
    if(props.items.length === 0){
        return(
            <h2 className="expenses-list__fallback">No Expenses Found</h2>
        )
    }
    return(
        <ul className="expenses-list">
            {expensesContent=props.items.map((expense)=>(
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/> 
        ))}
        </ul>
    ) 
}


export default ExpensesList;