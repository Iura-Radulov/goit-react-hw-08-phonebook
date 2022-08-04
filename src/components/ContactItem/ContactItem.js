import { useDeleteContactMutation } from 'redux/contactApiSlice';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { Oval } from 'react-loader-spinner';

const ContactItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li className={s.item}>
      <span className={s.name}>{name}:</span>
      <span className={s.phone}>{phone}</span>
      <button className={s.deleteBtn} disabled={isDeleting} onClick={() => deleteContact(id)}>
        {isDeleting && <Oval width={15} height={15} />}
        <span className={s.deleteText}>Delete</span>
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;
