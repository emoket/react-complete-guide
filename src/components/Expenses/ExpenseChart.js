import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // chartDataPoints.value에 amount 채우기
  for (const item of props.items) {
    const expenseMonth = item.date.getMonth(); // Start from 0(January) to 11(Decemver)
    chartDataPoints[expenseMonth].value += item.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpenseChart;
