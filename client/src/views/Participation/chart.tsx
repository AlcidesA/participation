import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper } from './styles';
import { Participation } from './index';

interface ChartProps {
  participations: Participation[];
}

const Chart: React.FC<ChartProps> = ({ participations }) => {
  const colors = ['#41b8e2', '#3eba99', '#9b56b8', '#bdc3c7', '#e94a35'];

  const data = {
    labels: ['Hugo', 'Carlos', 'Eliza'],
    datasets: [
      {
        data: [12, 19, 3],
        labels: ['Hugo', 'Carlos', 'Eliza'],
        backgroundColor: [...colors],
        borderWidth: 0
      }
    ]
  };

  const options = {
    responsive: true,
    legend: {
      position: 'right',
      marginRight: 0,
      marginLeft: 0,
      labels: {
        boxWidth: 20,
        fontSize: 16,
        padding: 15,
        defaultFontFamily: 'Helvetica Neue'
      }
    }
  };

  return (
    <ChartWrapper>
      <Doughnut data={data} options={options} />
    </ChartWrapper>
  );
};

export default Chart;
