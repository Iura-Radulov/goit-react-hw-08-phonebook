import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Box } from '@mui/material';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <Box className={s.container}>
      <Box className={s.form}>
        <h2 className="title">Phone book</h2>
        <ContactForm />
        <div>
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </Box>
    </Box>
  );
}
