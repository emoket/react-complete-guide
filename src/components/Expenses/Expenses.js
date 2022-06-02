import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const saveDateDataHandler = (enteredDateData) => {
    console.log('Expenses.js', enteredDateData);
    setFilteredYear(enteredDateData);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onSaveDateData={saveDateDataHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
