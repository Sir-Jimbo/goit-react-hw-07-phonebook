import axios from 'axios';
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest());

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error)));
};

// Option with async/await, try/catch

// const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactRequest());

//     try {
//         const { data } = await axios.get('/contacts');

//         dispatch(fetchContactSuccess(data));
//     } catch (error) {
//         dispatch(fetchContactSuccess(error));
//     }
// }

const addContact = (name, number) => dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = (contactId) => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));
};

const operations = {
    fetchContacts,
    addContact,
    deleteContact
};

export default operations;