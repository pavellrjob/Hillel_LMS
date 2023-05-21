import React, { useState } from 'react';
import './component.css';
import useAxiosHeroes from '../hooks/useAxiosHeroes.js';
import ListOfContents from './listOfContents.js';
import Pagination from './pagination';

export default function WrapperForHeros() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useAxiosHeroes(page);

  if (error) {
    return <h1 style={{ color: 'red' }}>We have a problem</h1>;
  }

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <Pagination data={data.info} page={page} setPage={(page) => setPage(page)} />
          <ListOfContents data={data.results} />
        </div>
      )}
    </>
  );
}
