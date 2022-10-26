import styled from 'styled-components';

export const Tdata = styled.td`
  padding: 10px 40px;
  text-align: center;
  background-color: #e7edf4;
  /* &:nth-child(odd) {
    background-color: #cdd2d8;
  } */
`;

export const Theader = styled.th`
  padding: 10px 40px;
  text-align: center;
  background-color: rgb(107, 161, 171); 
  &:hover {
  transform: scale(1.01);
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  background-color: rgb(160, 105, 154);
`;

export const Type = styled(Tdata)`
  text-transform: capitalize;
`;

export const Table = styled.table`
  tr:nth-child(even) td {
    background-color: #cdd2d8;
  }
  margin-left: auto;
  margin-right: auto;
  padding-left: auto;
`;
