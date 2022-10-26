import styled from 'styled-components';

export const FriendList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  padding-left: auto;
  width: 300px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;

  border: 1px solid gray;
  border-radius: 10px;
  height: 100px;
  background-color: rgb(107, 161, 171);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
  transform: scale(1.01);
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  background-color: rgb(160, 105, 154);

  &:not(:last-child) {
  margin-bottom: 20px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 30px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
