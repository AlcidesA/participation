import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper } from './styles';
import { Participation } from './index';

interface ChartProps {
  participations: Participation[];
}

interface Chart {
  data: {
    labels: Array<string>,
    datasets: Array<{
      data: Array<number>,
      labels: Array<string>,
      backgroundColor: Array<string>,
      borderWidth: number;
    }>
  },
  options: {
    responsive: boolean,
      legend: {
        position: string,
        labels: {
          boxWidth: number,
          fontSize: number,
          padding: number,
          defaultFontFamily: string
        }
      }
  }  
}

const Chart: React.FC<ChartProps> = ({ participations }) => {
  const colors = ['#41b8e2', '#3eba99', '#9b56b8', '#bdc3c7', '#e94a35'];

  const chart: Chart = {
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          labels: [],
          backgroundColor: [...colors],
          borderWidth: 0
        }
      ]
    },
    options: {
      responsive: true,
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
          fontSize: 16,
          padding: 15,
          defaultFontFamily: 'Helvetica Neue'
        }
      }
    }
    
  };

  const dataset = chart.data.datasets[0];
  participations.forEach(participation => {
    dataset.data.push(participation.participation);
    dataset.labels.push(participation.firstName + " " + participation.lastName)
    chart.data.labels.push(participation.firstName + " " + participation.lastName);
  })

  return (
    <ChartWrapper>
      <Doughnut data={chart.data} options={chart.options} />
    </ChartWrapper>
  );
};

export default Chart;
