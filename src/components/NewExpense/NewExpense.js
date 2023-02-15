import React, {useState} from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const isEditingHandler= () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  const ExpenseHandler = (expenseSavedData) => {
    console.log(expenseSavedData,'data')
    const expenseData = {
      ...expenseSavedData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }



  return (
    <div className='new-expense'>
    {!isEditing && <button 
    onClick = {isEditingHandler}>
    New Expense </button>}
    
    {isEditing && <ExpenseForm 
     onSaveExpenseData={ExpenseHandler}
     onCancel={stopEditingHandler}
    />}
    </div>
  )
}

export default NewExpense