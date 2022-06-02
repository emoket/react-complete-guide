import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const dateChangeHandler = (event) => {
    console.log('In ExpenseFilter.js', event.target.value)
    props.onSaveDateData(event.target.value)

    console.log("filtered year selected", props.selected)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dateChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;