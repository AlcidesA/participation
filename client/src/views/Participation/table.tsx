import React from 'react';
import { StyledTable } from './styles';
import { Participation } from './index';

interface TableProps {
  participations: Participation[];
}

const Table: React.FC<TableProps> = ({ participations }) => {
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
        {participations &&
          participations.map((participation, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{participation.firstName}</td>
              <td>{participation.lastName}</td>
              <td>{participation.participation}%</td>
            </tr>
          ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
