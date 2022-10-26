import styled from 'styled-components';

export const Container = styled.section`
  padding: 30px;
  width: 700px;
  margin: 50px auto;
  background-color: rgb(181, 214, 241);

  &:hover {
  transform: scale(1.01);
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  
`;

export const Title = styled.h2`
  color: #7a7a7a;
  text-align: center;
`;
export const StatList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  display: flex;
`;
export const StatItem = styled.li`
  padding: 15px;
  background-color: rgb(4, 119, 165);
  width: 15%;
  border: 1px solid;
  &:hover {
  transform: scale(1.01);
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;