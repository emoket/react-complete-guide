import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
