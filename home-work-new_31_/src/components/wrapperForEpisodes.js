import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './component.css';
import Pagination from './paginationForEpisodes';

import { useSelector, useDispatch } from 'react-redux';
import { getListOfEpisodesAsync } from '../store/slices/episodes.js';

const ListOfContents = () => {
  const page = useSelector((state) => state.episodes.page);
  const episodes = useSelector((state) => state.episodes.listOfEpisodes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOfEpisodesAsync(page));
  }, [dispatch, page]);

  return (
    <div className="container herolist">
      {episodes.map((hero, index) => (
        <div key={`hero-card-${index}`} className="heroCard">
          {hero.name}
        </div>
      ))}
    </div>
  );
};

export default function WrapperForHeros() {
  const error = useSelector((state) => state.episodes.errorInListOfEpisodes);

  if (error) {
    return <h1 style={{ color: 'red' }}>We have a problem</h1>;
  }

  return (
    <>
      <div className="wrapper">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
      <div className="wrapper">
        <h5>List of characters</h5>
        <Pagination />
        <ListOfContents />
      </div>
    </>
  );
}
