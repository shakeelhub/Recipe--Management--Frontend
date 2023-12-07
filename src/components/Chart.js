import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

function Chart(props) {
  let chartComponent;

  switch (props.chartType) {
    case 'bar':
      chartComponent = <Bar data={props.chartData} options={getChartOptions(props)} />;
      break;
    case 'line':
      chartComponent = <Line data={props.chartData} options={getChartOptions(props)} />;
      break;
    case 'pie':
      chartComponent = <Pie data={props.chartData} options={getChartOptions(props)} />;
      break;
    default:
      chartComponent = null;
  }

  return <div className="chart">{chartComponent}</div>;
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: 'bottom',
  chartType: 'bar', // Default chart type
};

function getChartOptions(props) {
  return {
    title: {
      display: props.displayTitle,
      text: 'Largest Cities in Massachusetts',
      fontSize: 25,
    },
    legend: {
      display: props.displayLegend,
      position: props.legendPosition,
      labels: {
        fontColor: '#000',
      },
    },
  };
}

export default Chart;
