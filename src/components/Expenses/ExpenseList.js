import ExpenseItem from './ExpenseItem';
import styles from './ExpenseList.module.css';

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className={styles['expenses-list__fallback']}>No Data Found.</h2>;
  }

  return (
    <ul className={styles['expenses-list']}>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
