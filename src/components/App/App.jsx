import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import { fetchContactsData } from '../../reduxe/contacts/contactsOperations'
import { PhonebookWrapper, MainBookTitle, BookTitle } from './App.styled';


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);

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