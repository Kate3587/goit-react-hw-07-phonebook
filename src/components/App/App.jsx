import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import { PhonebookWrapper, MainBookTitle, BookTitle } from './App.styled';


export const App = () => {
  return (
    <PhonebookWrapper>
      <MainBookTitle>Phonebook</MainBookTitle>
      <ContactForm
      />
      <div>
        <BookTitle>Contacts</BookTitle>
        <Filter
        />
        <ContactList
        />
      </div>
    </PhonebookWrapper>
  );
};