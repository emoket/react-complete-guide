import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  let chartValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...chartValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => {
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