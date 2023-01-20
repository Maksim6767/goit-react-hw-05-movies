import { useParams } from 'react-router-dom';
import { fetch } from '../Fetch';
import { useState, useEffect } from 'react';
import { Item, Title } from './Reviews.styled';
import Loader from '../Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const reviewsLink = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7bfeb33324f72574136d1cd14ae769b5&language=en-US&page=1`;

    const getApi = async () => {
      setLoading(true);
      try {
        const getInfo = await fetch(reviewsLink);
        setReviews(getInfo.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getApi();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {reviews.length === 0 && !loading ? (
        <Title>Sorry, we didn't find anything</Title>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <Item key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </Item>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Reviews;