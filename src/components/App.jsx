import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './App.module.css';

import Forms from './forms/Forms';
import ContactsList from './contactslist/ContactsList';
import Filter from './filter/Filter';
import Loading from './loading/Loading';

import { getContacts } from '../redux/items/items-operations';
import { itemsStore, itemsIsLoadingStore } from 'redux/items/items-selector';
import { filterStore } from 'redux/filter/filter-selector';

function App() {
  const dispatch = useDispatch();
  const contactsArr = useSelector(itemsStore);
  const filterValue = useSelector(filterStore);
  const isLoading = useSelector(itemsIsLoadingStore);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filterState = () => {
    return contactsArr?.filter(el =>
      el.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };
  const renderFiterItem = filterState();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Forms />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isLoading && <Loading />}

      {!isLoading && contactsArr.length !== 0 && (
        <ContactsList renderFilterContacts={renderFiterItem} />
      )}
    </div>
  );
}

export default App;
