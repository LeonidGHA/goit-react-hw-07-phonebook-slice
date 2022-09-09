import { combineReducers } from 'redux';

import items from 'redux/items/items-reducer';
import { filter } from 'redux/filter/filter-reducer';

export default combineReducers({ items, filter });
