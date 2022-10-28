import styled from 'styled-components';

export const GeneralWrapper = styled.div`
  margin: 15px;
  width: 750px;
  margin: 50px auto;

  border-radius: 0px 0px 4px 4px;
  background-color: #d4ceceb4;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  transition: all 250ms ease;

  &:hover {
  transform: scale(1.01);
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;
export const Wrapper = styled.div`
  text-align: center;
  color: #b3afaf;
  padding: 15px;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  display: block;
  width: 200px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  margin-top: 20px;
  font-size: 25px;
  font-weight: 700;
  color: #000000;
`;
export const Tag = styled.p`
  margin-bottom: 8px;
  color: #000000;
`;
export const Location = styled.p`
  color: #000000;

`;

export const Statistics = styled.ul`
  background-color: #f0f0f0;
  border-color: black;
  padding-left: 0;
  padding: 15px;
  text-align: center;
  margin: 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid rgb(172, 171, 171);
`;
export const Label = styled.span`
  font-size: 14px;
  color: #000000;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-weight: 700;
  color: #000000;
`;