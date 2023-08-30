
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT, VIEW_CONTACT } from './actionTypes'; // Importing action type constants
import { toast } from 'react-toastify'; // Importing toast for displaying notifications

// Initial state for the Redux store
const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [], // Initializing contacts from localStorage or an empty array
  selectedContactId: null, // Initialize selected contact ID as null
};

// Redux reducer function
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT: {
      let flag = 0;

      // Validating input for adding a new contact
      if (
        action.payload.first_name === "" ||
        action.payload.last_name === ""
      ) {
        toast.error('Ohh! You Missed Required Input, Please fill'); // Display an error notification
        flag = 1;
      } else {
        // Checking for duplicate contact names
        state.contacts.forEach((el) => {
          if (
            el.first_name === action.payload.first_name &&
            el.last_name === action.payload.last_name
          ) {
            toast.error('Name Already Exists In Contact'); // Display an error notification
            flag = 1;
          }
        });
      }

      if (!flag) {
        // Adding a new contact if validation passes
        let updatedContacts =
          JSON.parse(localStorage.getItem("contacts")) || [];
        updatedContacts.push({
          id: state.contacts.length + 1,
          ...action.payload,
        });
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        return {
          ...state,
          contacts: [...updatedContacts],
        };
      }
    }

    case REMOVE_CONTACT: {
      // Removing a contact
      let Contacts = JSON.parse(localStorage.getItem("contacts"));
      let updatedContacts = Contacts.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      toast.success('Contact Removed Successfully'); // Display a success notification
      return {
        ...state,
        contacts: [...updatedContacts],
      };
    }

    case EDIT_CONTACT: {
      if (
        action.payload.first_name === "" ||
        action.payload.last_name === ""
      ) {
        toast.error('Input Fields Cannot Be Left Empty'); // Display an error notification
        return state;
      } else {
        let flag = 0;
        let Contacts = JSON.parse(localStorage.getItem("contacts"));

        // Validating input for editing a contact
        Contacts.forEach((el) => {
          if (
            el.id !== action.payload.id &&
            el.first_name === action.payload.first_name &&
            el.last_name === action.payload.last_name
          ) {
            toast.error('Name Already Exists!!'); // Display an error notification
            flag = 1;
            return state;
          }
        });

        if (flag) {
          return state;
        } else {
          // Updating a contact if validation passes
          let updatedContacts = Contacts.map((el) => {
            if (el.id === action.payload.id) {
              return { ...action.payload };
            } else {
              return el;
            }
          });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          toast.success('Contact has been Updated'); // Display a success notification
          return {
            ...state,
            contacts: updatedContacts,
          };
        }
      }
    }

    case VIEW_CONTACT: {
      // Viewing a specific contact
      return {
        ...state,
        selectedContactId: action.payload,
      };
    }

    default:
      return state;
  }
}
