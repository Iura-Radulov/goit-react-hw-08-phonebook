import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contactSelectors';
import { useFetchContactsQuery } from 'redux/contactApiSlice';
import ContactItem from 'components/ContactItem';
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
        <ul>
          {visibleNames.map(({ id, number, name }) => (
            <ContactItem key={id} name={name} phone={number} id={id} />
          ))}
        </ul>
      )}
      {contacts?.length === 0 && <p>There are no contacts</p>}
      {isLoading && <Oval width={80} height={80} />}
    </div>
  );
};

export default ContactList;
