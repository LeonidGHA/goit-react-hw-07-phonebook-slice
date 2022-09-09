import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';

import { changeFilter } from 'redux/filter/filter-actions';
import { filterStore } from 'redux/filter/filter-selector';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(filterStore);
  return (
    <input
      type="text"
      className={css.input}
      name="filter"
      placeholder="Serch Contacts"
      value={filterValue}
      onChange={e => dispatch(changeFilter(e.target.value))}
    />
  );
}

export default Filter;
