import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Nav, Link, Container } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </header>
      <Suspense fullback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};