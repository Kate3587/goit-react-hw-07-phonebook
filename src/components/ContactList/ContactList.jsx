import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from '../../reduxe/contacts/contactsSlice.js';
import { getFilteredContacts } from '../../reduxe/selectors';
import {ItemName, ContactBtn} from './ContactList.styled';

const ContactList = () => {

    const filterForUsers = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    const onDeleteUsers = id => {
    dispatch(deleteContact(id));
  };


    return (
        <ul>
        {filterForUsers.map(({ name, number, id }) => (
            <div
                key={id}>
                <ItemName>{name}: {number}</ItemName>
                <ContactBtn onClick={() => onDeleteUsers(id)} type="button">Delete</ContactBtn>
            </div>
        ))}
        </ul>
    )
};

export default ContactList;

ContactList.propTypes = {
    filterForUsers: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string,
    })),
    onDeleteUsers: PropTypes.func,
};