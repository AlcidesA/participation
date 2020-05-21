import React from 'react';
import { Input, Button, Wrapper, StyledContainer } from './styles';

const Form = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <Input type="text" placeholder="First name" name="firstName" />
        <Input type="text" placeholder="Last name" name="lastName" />
        <Input type="text" placeholder="Participation" name="participation" />
        <Button>Send</Button>
      </StyledContainer>
    </Wrapper>
  );
};

export default Form;
