import {createStore} from 'redux';
import {contactsReducer} from './Reducers/contactsReducer';

export const store = createStore(contactsReducer);
