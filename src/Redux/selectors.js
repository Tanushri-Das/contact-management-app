// selectors.js
export const selectContactById = (state, contactId) => {
   // Using the `find` method to search for a contact in the `state.contacts` array whose `id` matches the provided `contactId`.
  // The `find` method returns the first element that satisfies the condition, or `undefined` if no element is found.
  return state.contacts.find((contact) => contact.id === contactId);
};
