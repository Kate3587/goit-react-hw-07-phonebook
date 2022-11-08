import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://636a4e21c07d8f936d99a749.mockapi.io/contacts'
  );

  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(
    'https://636a4e21c07d8f936d99a749.mockapi.io/contacts',
    contact
  );
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://636a4e21c07d8f936d99a749.mockapi.io/contacts${id}`
  );
  return data;
};