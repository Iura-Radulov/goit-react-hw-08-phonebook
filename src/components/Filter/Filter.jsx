import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contactSelectors';
import { changeFilter } from 'redux/contactSlice';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.block}>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        className={s.input}
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};

export default Filter;
