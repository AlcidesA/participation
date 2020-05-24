import styled from 'styled-components';
import { Container } from '../../styles/container';

export const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  grid-column: 1 / -1;
  font-weight: bold;
  font-size: var(--text-lg);
  text-align: center;
`;

export const Subtitle = styled.p`
  grid-column: 1 / -1;
  font-size: var(--text-base);
  text-align: center;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;

  th {
    padding: 0.5rem;
    border: 1px solid #555;

    &:not(:last-child) {
      text-align: left;
    }
  }

  td {
    padding: 0.5rem;
    border: 1px solid #555;

    &:first-child,
    &:last-child {
      text-align: center;
    }
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
`;
