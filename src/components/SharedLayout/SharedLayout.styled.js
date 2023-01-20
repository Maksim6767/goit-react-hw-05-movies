import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  font-size: 22px;
  font-weight: 600;
  height: 60px;
  display: flex;
  gap: 35px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
export const Link = styled(NavLink)`
  :hover {
    color: orange;
  }
  transition: color 300ms;
  &.active {
    color: orange;
    &::after {
      content: '';
      width: 100%;
      background-color: #e8e2e2;
      border-radius: 1.2em;
      display: block;
      height: 2px;
    }
  }
  padding: 15px;
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 980px;
  padding: 0 15px;
`;