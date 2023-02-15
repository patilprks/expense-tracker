import '../Expense/ExpenseItem.css'
import ExpenseDate from '../Expense/ExpenseDate'
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  
  return (
    <li className='no-style'>
        <Card className="expense-item">
          <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
              <h2>
              {props.title}
              </h2>
            <div className="expense-item__price">
             {props.amount}
            </div>
          </div>
        </Card>
        </li> 
  )
}

export default ExpenseItem;
