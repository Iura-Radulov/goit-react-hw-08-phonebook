import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Box } from '@mui/material';

export default function ContactsPage() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        backgroundImage:
          'url(https://png.pngtree.com/thumb_back/fh260/background/20210814/pngtree-blue-purple-simple-gradient-background-image_760572.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          padding: '30px 30px 0 30px',
          width: 564,
          paddingTop: 5,
          border: '2px solid grey',
          borderRadius: 3,
          backgroundColor: '#F2F5F9',
        }}
      >
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
