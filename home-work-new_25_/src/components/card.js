import React from 'react';
import './component.css';

const HeroCard = (props) => {
  return <div className="heroCard">{props.children}</div>;
};
export default HeroCard;
