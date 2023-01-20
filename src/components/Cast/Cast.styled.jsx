import styled from 'styled-components';
export const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 330px;
  border-radius: 1.2em;
`;
export const List = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Item = styled.li`
  width: 220px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 1.2em;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
`;
export const P = styled.p`
  margin: 0 5px 7px;
`;