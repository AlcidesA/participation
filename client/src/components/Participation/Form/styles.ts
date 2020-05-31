import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #41b8e3;
  padding: 1rem 0;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 120px;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
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
