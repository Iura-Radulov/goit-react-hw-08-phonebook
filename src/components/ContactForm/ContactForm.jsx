import React, { useState } from 'react';
import { useFetchContactsQuery, useAddContactMutation } from 'redux/contactApiSlice';
import s from './ContactForm.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';
import { Box, FormGroup, FormControl, FormLabel, TextField, Button } from '@mui/material';

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
    console.log(name, number);
    addContact({ name, number });
    toast.success('Contact created with success');
    resetValue();
  };

  return (
    <Box
      component="form"
      sx={{
        // display: 'flex',
        width: 250,
        height: 300,
        margin: 0,
      }}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <FormControl>
          <FormLabel className={s.label}>Name </FormLabel>
          <TextField
            sx={{ marginBottom: 5 }}
            size="small"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            id="outlined-error-helper-text"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel className={s.label}>Number </FormLabel>
          <TextField
            sx={{ marginBottom: 5 }}
            size="small"
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            id="outlined-error-helper-text"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <Button
            size="medium"
            variant="outlined"
            color="primary"
            disabled={isLoading}
            type="submit"
          >
            <span>{isLoading && <Oval width={15} height={15} />}</span>
            <span className={s.buttonLabel}>Add contact</span>
          </Button>
          <Toaster />
        </FormControl>
      </FormGroup>
    </Box>
  );
};

export default ContactForm;
