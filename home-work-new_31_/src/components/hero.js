import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSelectedHero } from '../store/slices/heroes.js';
import './component.css';

export default function Hero() {
  const hero = useSelector((state) => state.heroes.selectedHero);
  const error = useSelector((state) => state.heroes.errorInSelectedHero);

  const dispatch = useDispatch();

  if (error) {
    console.log('error from hero', error);
    return <h1 style={{ color: 'red' }}>We have a problem</h1>;
  }

  return (
    <div className="container hero">
      <div className="row">
        <div className="col-4">
          <img src={`${hero.image}`} alt="Img" className="heroImage"></img>
        </div>
        <div className="col-5 heroDescription">
          <h4>{hero.name}</h4>
          <div className="text-start">
            <div>
              <b>Status:</b> {hero.status}
            </div>
            <div>
              <b>Species:</b> {hero.species}
            </div>
            <div>
              <b>Gender:</b> {hero.gender}
            </div>
          </div>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-outline-dark m-2"
            onClick={() => {
              dispatch(closeSelectedHero());
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
