// action.js
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT, VIEW_CONTACT } from './actionTypes';


export const addContact = (payload) => {
  console.log(payload)
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};
export const editContact = (payload) => {
  console.log(payload)
  return {
    type: EDIT_CONTACT,
    payload,
  };
};
// actions.js
export const viewContact = (contactId) => {
  return {
    type: VIEW_CONTACT,
    payload: contactId,
  };
};
