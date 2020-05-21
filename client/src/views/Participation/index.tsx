import React from 'react';
import Form from '../../components/Participation/Form';
import { Title, Subtitle, StyledContainer } from './styles';
import Table from './table';

const Participation = () => {
  return (
    <React.Fragment>
      <Form />
      <StyledContainer>
        <Title>Participations</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Subtitle>

        <Table />

        <p>chart</p>
      </StyledContainer>
    </React.Fragment>
  );
};

export default Participation;
