import { Wrapper } from 'pages/Home/Home.styled';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { fetch } from 'components/Fetch';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilmList, Item, LinkItem, Img } from 'pages/Home/Home.styled';
import { Form, Input, Button, Label } from './Movies.styled';
import Loader from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [qwery, setQwery] = useState('');
  const [searchres, setSearchres] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const searchName = searchParams.get('search') ?? '';

  const { register, handleSubmit, reset } = useForm();
  const imgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg`;
  const location = useLocation();

  const onSubmit = value => {
    if (qwery === value.name) {
      return;
    }
    reset();
    setError(false);
    setSearchres([]);
    setSearchParams({ search: value.name });
    setQwery(value.name);
  };
  useEffect(() => {
    setQwery(searchName);
    const findFilms = `https://api.themoviedb.org/3/search/movie?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US&query=${qwery}&page=1&include_adult=false`;

    if (!qwery) {
      return;
    }
    const getApi = async () => {
      setLoader(true);
      try {
        const getTop = await fetch(findFilms);
        setSearchres(getTop.results);

        getTop.total_results === 0 && toast("Sorry,we didn't find anything");
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getApi();
  }, [qwery, searchName]);
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Enter the name of the movie</Label>
        <div>
          <Input
            type="text"
            {...register('name', { required: true })}
            placeholder="Conan"
          />

          <Button type="submit">Search</Button>
        </div>
      </Form>
      <ToastContainer />
      {loader && <Loader />}
      {error ? (
        <h2>
          Sorry, something went wrong. Please reload the page and try again
        </h2>
      ) : (
        <FilmList>
          {searchres !== [] &&
            searchres.map(
              ({ id, name, title, poster_path, release_date = [] }) => (
                <Item key={id}>
                  <LinkItem to={`${id}`} state={{ from: location }}>
                    {' '}
                    <Img
                      src={poster_path ? imgLink + poster_path : defaultImg}
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
    </Wrapper>
  );
};
export default Movies;