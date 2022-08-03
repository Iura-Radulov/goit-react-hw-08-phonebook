import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default function ContactsPage() {
  return (
    <div className="container">
      <h2 className="title">Phone book</h2>
      <ContactForm />
      <div>
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
