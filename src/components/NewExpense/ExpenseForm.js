import React, { useState, useRef } from 'react';
import ErrorModal from '../UI/ErrorModal';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // using useRef Hook instead of useState
  const titleInputRef = useRef();

  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: event.target.value,
  // });
  // === Better Solution ===
  // setUserInput((prevState) => {
  //   return {
  //     ...prevState,
  //     enteredTitle: event.target.value,
  //   };
  // });
  // };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    // 브라우저의 기본 submit 동작을 막는다. (본 React 파일을 호스팅하고 있는 서버에 요청을 보냄)
    event.preventDefault();

    // Form Validation Here
    if (
      // enteredTitle.trim().length === 0 ||
      titleInputRef.current.value.trim().length === 0 ||
      enteredDate.trim().length === 0 ||
      enteredAmount.trim().length === 0
    ) {
      setIsFormValid(false);
      setError({
        title: 'Invalid input',
        message: 'Required filed must be filled',
      });
      return;
    }

    const expenseData = {
      // title: enteredTitle,
      title: titleInputRef.current.value,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Child to Parent Call Here
    props.onSaveExpenseData(expenseData);

    // setEnteredTitle('');
    titleInputRef.current.value = '';
    setEnteredAmount('');
    setEnteredDate('');

    props.onCancelAddExpense();
  };

  const [error, setError] = useState();

  const hideModalHandler = () => setError(undefined);

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHideModal={hideModalHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label style={{ color: !isFormValid ? 'red' : 'black' }}>
              Title
            </label>
            <input
              style={{ borderColor: !isFormValid ? 'red' : '' }}
              type='text'
              // value={enteredTitle}
              // onChange={titleChangeHandler}
              ref={titleInputRef}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              value={enteredAmount}
              min='0.01'
              step='0.01'
              onChange={amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              value={enteredDate}
              min='2019-01-01'
              max='2022-12-31'
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='button' onClick={props.onCancelAddExpense}>
            Cancel
          </button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    </React.Fragment>
  );
};
export default ExpenseForm;
