import './App.css';
import Expense from './components/Expense';
function App() {

  const expense = [
    {
      id: '1',
      title: 'Gym Fees',
      amount: 15000,
      date: new Date(2020, 6, 14),
    },
    {
      id: '2',
      title: 'Text book',
      amount: 800,
      date: new Date(2021, 2, 28),
    },
    {
      id: '3',
      title: 'Online Course',
      amount: 1024,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <h1 className="App__heading">Expense Tracker</h1>
     <Expense items={expense} />
      
    </div>
  );
}

export default App;
