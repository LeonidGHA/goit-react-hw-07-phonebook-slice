import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import css from './ContactsList.module.css';

import { deleteContact } from '../../redux/items/items-operations';
function ContactsList({ renderFilterContacts }) {
  const dispatch = useDispatch();

  const renderContact = renderFilterContacts.map(({ id, name, phone }) => (
    <li className={css.item} key={id}>
      {name} : {phone}
      <button
        className={css.listBtn}
        type="button"
        onClick={e => dispatch(deleteContact(e.target.id))}
        id={id}
      >
        X
      </button>
    </li>
  ));

  return <ul className={css.list}>{renderContact}</ul>;
}

ContactsList.propTypes = {
  renderFilterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
