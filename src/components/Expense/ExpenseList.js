import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) =>{
    
    if(props.items.length ===0){
        return <h2 className='expense-list_fallback'> Found no expenses</h2>
    }
  return <ul className='expense-list'> 
            
 { props.items.map((ex)=> (
        <ExpenseItem
        key={ex.id}
        title={ex.title}
        amount={ex.amount}
        date={ex.date}
        />
      ))}
  
    </ul>
}

export default ExpenseList;