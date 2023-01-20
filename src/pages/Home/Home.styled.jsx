import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const FilmList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: 300px 300px 300px;
  justify-content: center;
  row-gap: 20px;
`;
export const LinkItem = styled(Link)`
  :hover {
    color: orange;
  }
  transition: all 0.3s;
`;
export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 25px;
  text-align: center;
`;
export const Wrapper = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
`;
export const Item = styled.li`
  width: 300px;
  font-size: 18px;
  font-weight: 500;
`;
export const Img = styled.img`
  border-radius: 1.3em;
  width: 300px;
  height: 450px;
  object-fit: cover;
  margin-bottom: 7px;
`;