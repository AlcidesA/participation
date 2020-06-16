import React from 'react';
import { StyledTable, Delete } from './styles';
import { Participation } from './index';

interface TableProps {
  participations: Participation[];
  onDelete: (id: number) => void;
}

const Table: React.FC<TableProps> = ({ participations, onDelete }) => {

  return (
    <StyledTable>
      <thead>
        <tr>
          <th></th>
          <th>First name</th>
          <th>Last name</th>
          <th>Participation</th>
          <th></th>
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
              <Delete onClick={() => onDelete(participation.id)}>x</Delete>
            </tr>
          ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
