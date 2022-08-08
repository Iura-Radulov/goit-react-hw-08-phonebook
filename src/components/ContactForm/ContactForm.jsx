import React, { useState } from 'react';
import { useFetchContactsQuery, useAddContactMutation } from 'redux/contactApiSlice';

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

    addContact({ name, number });
    toast.success('Contact created with success');
    resetValue();
  };

  return (
    <Box
      component="form"
      validate
      sx={{
        width: 250,
        maxWidth: '100%',
        height: 300,
        margin: 0,
      }}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <FormControl>
          <FormLabel>Name </FormLabel>
          <TextField
            sx={{ marginBottom: 5 }}
            size="small"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            id="outlined-name"
            inputProps={{
              pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              title:
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            }}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Number </FormLabel>
          <TextField
            sx={{ marginBottom: 5 }}
            size="small"
            type="tel"
            id="standard-tel-input"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
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
            <span>Add contact</span>
          </Button>
          <Toaster />
        </FormControl>
      </FormGroup>
    </Box>
  );
};

export default ContactForm;
