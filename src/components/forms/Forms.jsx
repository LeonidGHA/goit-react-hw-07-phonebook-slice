import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Forms.module.css';

import { itemsStore } from 'redux/items/items-selector';
import { postContact } from 'redux/items/items-operations';

function Forms() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsArr = useSelector(itemsStore);
  const dispatch = useDispatch();

  const textWrite = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onClickSubmit = e => {
    e.preventDefault();

    if (contactsArr.find(el => el.name === name || el.phone === number)) {
      Notiflix.Report.warning(
        `Warning`,
        `${name} or ${number} is already in cotacts`,
        'Okay'
      );
      reset();
      return;
    }
    dispatch(postContact({ name, number }));
    Notiflix.Notify.success('You have a new Contact');
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={css.formStyle} onSubmit={onClickSubmit}>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Corben Dallas"
        value={name}
        onChange={textWrite}
      />
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="+38-0__-__-__-__"
        value={number}
        onChange={textWrite}
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Forms;
