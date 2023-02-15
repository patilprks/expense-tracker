
import Card from '../UI/Card';
import '../Expense/Expense.css'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {
const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
 
  const selectedFilter = props.items.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  
  return (
    <div>
    <Card className="expense">
    <ExpensesFilter 
    selected= {filteredYear} 
    onChangeExpenseFilter={filterChangeHandler}/>
    <ExpenseChart expenses= {selectedFilter}/>
    <ExpenseList items={selectedFilter}/>
    </Card>
    </div>
  );
}

export default Expense