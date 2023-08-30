// selectors.js
export const selectContactById = (state, contactId) => {
    return state.contacts.find(contact => contact.id === contactId);
  };
  