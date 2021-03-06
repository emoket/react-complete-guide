import ChartBar from './ChartBar';
import styles from './Chart.module.css';

const Chart = ({ dataPoints }) => {
  let chartValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...chartValues);

  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximumValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
