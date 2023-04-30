import React, { useEffect, useState } from "react";

export const HttpHerousContext = React.createContext({
  heroList: [],
  fetchHeros: () => {

  }
});

const HttpHerousProvider = (props) => {
  const [heroList, setHeroList] = useState([]);

  useEffect(() => fetchHeros (`https://rickandmortyapi.com/api/character/?page=1`), []) 
  // выполнится раз при монтировке заполнит данными с первой страници

  const fetchHeros = (page) => {
    fetch (page)
      .then(resp => resp.json())
      .then(data => setHeroList(data))
      .catch(err => console.log('Error in request'));
      
  } 

  const getHeroCtx = () => ({
    heroList,
    fetchHeros,
    
  })


  return (
      <HttpHerousContext.Provider value={getHeroCtx()} >
          {props.children}
      </HttpHerousContext.Provider>
  );
}

export default HttpHerousProvider
