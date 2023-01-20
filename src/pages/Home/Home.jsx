import { useEffect, useState } from 'react';
import { FilmList, LinkItem, Title, Wrapper, Item, Img } from './Home.styled';
import Loader from '../../components/Loader/Loader';
import { fetch } from '../../components/Fetch';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const topFilms =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=7bfeb33324f72574136d1cd14ae769b5';
  const firstImgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg`;
  useEffect(() => {
    const getApi = async () => {
      setLoader(true);
      try {
        const getTop = await fetch(topFilms);
        setFilms(getTop.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getApi();
  }, []);

  return (
    <Wrapper>
      {error ? (
        <h2>Sorry, something went wrong. Please reload the page</h2>
      ) : (
        <>
          <Title>Trending Today</Title>
          {loader ? (
            <Loader />
          ) : (
            <FilmList>
              {films.map(
                ({ id, name, title, poster_path, release_date = [] }) => (
                  <Item key={id}>
                    <LinkItem to={`/movies/${id}`} state={{ from: '/' }}>
                      {' '}
                      <Img
                        src={
                          poster_path ? firstImgLink + poster_path : defaultImg
                        }
                        alt={name}
                        loading="lazy"
                      />
                      {title ?? name} (
                      {release_date !== ''
                        ? release_date.slice(0, 4)
                        : 'unknown year'}
                      )
                    </LinkItem>
                  </Item>
                )
              )}
            </FilmList>
          )}
        </>
      )}
    </Wrapper>
  );
};
export default Home;