import React from 'react';
import './component.css';

import HeroCard from './card.js';

const ListOfContents = (props) => {
  return (
    <div className="herolist">
      {props.data.map((hero, index) => (
        <HeroCard key={`hero-card-${index}`}>{hero.name}</HeroCard>
      ))}
    </div>
  );
};

export default ListOfContents;
