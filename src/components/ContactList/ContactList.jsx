import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contactSelectors';

import { useFetchContactsQuery } from 'redux/contactApiSlice';
import ContactItem from 'components/ContactItem';
import s from './ContactList.module.css';
import { Oval } from 'react-loader-spinner';

const ContactList = () => {
  const { data: contacts, isLoading } = useFetchContactsQuery();

  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
  const visibleNames =
    contacts && contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));

  return (
    <div>
      {visibleNames && (
        <ul className={s.list}>
          {visibleNames.map(({ id, phone, name }) => (
            <ContactItem key={id} name={name} phone={phone} id={id} />
          ))}
        </ul>
      )}
      {isLoading && <Oval width={80} height={80} />}
    </div>
  );
};

export default ContactList;
