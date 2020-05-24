import React, { useEffect, useState } from 'react';
import Form from '../../components/Participation/Form';
import { Title, Subtitle, StyledContainer } from './styles';
import Table from './table';
import Chart from './chart';
import api from '../../services/api';

export interface Participation {
  id: number;
  firstName: string;
  lastName: string;
  participation: number;
}

const Participation = () => {
  const [participations, setParticipations] = useState<Participation[]>([]);

  useEffect(() => {
    api.get('participation').then((res) => {
      console.log('res', res);
      if (res.status === 200) setParticipations(res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Form />
      <StyledContainer>
        <Title>Participations</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Subtitle>

        <Table participations={participations} />

        <Chart participations={participations} />
      </StyledContainer>
    </React.Fragment>
  );
};

export default Participation;
