import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './component.css';
import Pagination from './paginationForHeroes';
import Hero from './hero.js';

import { useSelector, useDispatch } from 'react-redux';
import { getListOfHeroesAsync, getHeroByIdAsync } from '../store/slices/heroes.js';

const ListOfContents = () => {
  // const { page, heroes } = useSelector((state) => state.heroes);

  const page = useSelector((state) => state.heroes.page);
  const heroes = useSelector((state) => state.heroes.listOfHeroes);

  const dispatch = useDispatch();
  const showCardInfo = (id) => dispatch(getHeroByIdAsync(id));

  useEffect(() => {
    dispatch(getListOfHeroesAsync(page));
  }, [dispatch, page]);

  return (
    <div className="container herolist">
      {heroes.map((hero, index) => (
        <div key={`hero-card-${index}`} className="heroCard" onClick={() => showCardInfo(hero.id)}>
          <div className="row  align-items-center">
            <div className="col-3">
              <img src={`${hero.image}`} alt="Img" className="heroAvatar"></img>
            </div>
            <div className="col-6">{hero.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function WrapperForHeros() {
  const selectedHero = useSelector((state) => state.heroes.selectedHero);
  const error = useSelector((state) => state.heroes.errorInListOfHeroes);

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
        {selectedHero && (
          <div>
            <Hero />
          </div>
        )}
        <h5>List of characters</h5>
        <Pagination />
        <ListOfContents />
      </div>
    </>
  );
}
