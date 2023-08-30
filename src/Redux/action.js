
// action.js - This file contains action creators for adding, removing, and editing contacts.

import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT, VIEW_CONTACT } from './actionTypes'; // Importing action type constants


// Action creator to add a new contact
export const addContact = (payload) => {
  console.log(payload); // Log the payload for debugging purposes
  return {
    type: ADD_CONTACT, // Action type for adding a contact
    payload, // The data associated with the action
  };
};

// Action creator to remove a contact
export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT, // Action type for removing a contact
    payload: {
      id, // The contact ID to be removed
    },
  };
};

// Action creator to edit an existing contact
export const editContact = (payload) => {
  console.log(payload); // Log the payload for debugging purposes
  return {
    type: EDIT_CONTACT, // Action type for editing a contact
    payload, // The updated contact data
  };
};

// Action creator to view a specific contact
export const viewContact = (contactId) => {
  return {
    type: VIEW_CONTACT, // Action type for viewing a contact
    payload: contactId, // The ID of the contact to be viewed
  };
};
