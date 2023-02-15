import React, {useState} from 'react';
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Gym Fees',
    amount: 12000,
    date: new Date(2020, 6, 14),
  },
  {
    id: '2',
    title: 'Text book',
    amount: 8000,
    date: new Date(2021, 2, 25),
  },
  {
    id: '3',
    title: 'Online Course',
    amount: 1024,
    date: new Date(2022, 5, 12),
  },
    {
    id: '4',
    title: 'Milk',
    amount: 4000,
    date: new Date(2020, 1, 25),
  },
  {
    id: '5',
    title: 'Fruits',
    amount: 2500,
    date: new Date(2021, 8, 10),
  },
  {
    id: '6',
    title: 'Households',
    amount: 10000,
    date: new Date(2022, 9, 15),
  },
    {
    id: '7',
    title: 'Servicing',
    amount: 15000,
    date: new Date(2020, 4, 14),
  },
  {
    id: '8',
    title: 'Insurance',
    amount: 35000,
    date: new Date(2021, 9, 22),
  },
  {
    id: '9',
    title: 'Yoga Class',
    amount: 20000,
    date: new Date(2022, 3, 4)
  }, 
];

function App() {

 const [expense, setExpense] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (NewExpenseData) => {
    setExpense((prevExpense) =>{
      return [NewExpenseData, ...prevExpense]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
     <Expense items={expense} />
      
    </div>
  );
}

export default App;
