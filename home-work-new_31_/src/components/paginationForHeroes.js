import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNextPage, setPreviousPage } from '../store/slices/heroes.js';

const Pagination = () => {
  const info = useSelector((state) => state.heroes.info);
  const page = useSelector((state) => state.heroes.page);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <button
        disabled={!info.prev}
        type="button"
        className="btn btn-outline-dark m-2"
        onClick={() => {
          dispatch(setPreviousPage(page - 1));
        }}
      >
        Previos
      </button>
      <button
        disabled={!info.next}
        type="button"
        className="btn btn-outline-dark m-2"
        onClick={() => {
          dispatch(setNextPage(page + 1));
        }}
      >
        Next
      </button>
    </React.Fragment>
  );
};

export default Pagination;
