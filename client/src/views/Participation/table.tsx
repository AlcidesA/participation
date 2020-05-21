import React from 'react';
import { StyledTable } from './styles';

const Table = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th></th>
          <th>First name</th>
          <th>Last name</th>
          <th>Participation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Carlos</td>
          <td>Moura</td>
          <td>5%</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Carlos</td>
          <td>Moura</td>
          <td>5%</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Carlos</td>
          <td>Moura</td>
          <td>5%</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Carlos</td>
          <td>Moura</td>
          <td>5%</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Carlos</td>
          <td>Moura</td>
          <td>5%</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default Table;
