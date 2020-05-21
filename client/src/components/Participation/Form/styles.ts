import styled from 'styled-components';
import { Container } from '../../../styles/container';

export const Wrapper = styled.div`
  background-color: #41b8e3;
  padding: 1rem 0;
`;

export const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 120px;
  grid-gap: 1rem;
`;

export const Input = styled.input`
  padding: 1rem;
  background-color: #fff;
  color: #555;
  border: 0;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 1rem;
  background-color: #41b8e2;
  color: #fff;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-radius: 4px;
`;
