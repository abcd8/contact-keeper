import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill John',
        email: 'jill@gmail.com',
        phone: '2222-111-111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sara Han',
        email: 'sara@gmail.com',
        phone: '1111-111-111',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Brian Bui',
        email: 'brian@gmail.com',
        phone: '3333-111-111',
        type: 'professional'
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Add contact
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };
  // Delete contact
  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  };
  // Set current contact
  const setCurrent = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  };
  // Clear current contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };
  // Update contact
  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };
  // Filter contact
  const filterContacts = text => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text
    });
  };
  // Clear filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  };
  return (
    <ContactContext.Provider
      value={{
        current: state.current,
        contacts: state.contacts,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
