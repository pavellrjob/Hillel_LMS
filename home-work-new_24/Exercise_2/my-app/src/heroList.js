import { ThemeContext } from './Provider';

import React, { useContext } from 'react';


const HeroCard = (props) => {
    const back = useContext(ThemeContext);

    return (
        <h4 style={back.theme ? {color: "#ffffff"} : {color: "#000000"}}>{props.children}</h4>
    )
}

export default HeroCard