import React, { useState } from 'react';
import { useFetchContactsQuery, useAddContactMutation } from 'redux/contactApiSlice';
import s from './ContactForm.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const resetValue = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts`);
      resetValue();
      return;
    }
    addContact(name, number);
    toast.success('Contact created with success');
    resetValue();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <p>Name</p>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        <p>Number</p>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} disabled={isLoading} type="submit">
        <span>{isLoading && <Oval width={15} height={15} />}</span>
        <span className={s.buttonLabel}>Add contact</span>
      </button>
      <Toaster />
    </form>
  );
};

export default ContactForm;
