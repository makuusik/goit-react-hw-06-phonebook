import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <label>
      Filter by name:
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter contacts by name"
      />
    </label>
  );
};

export default Filter;
