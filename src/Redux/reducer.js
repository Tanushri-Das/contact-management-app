
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT, VIEW_CONTACT } from './actionTypes';
import { toast } from 'react-toastify';

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  selectedContactId: null, // Initialize as null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT: {
      let flag = 0;
      if (
        action.payload.first_name === "" ||
        action.payload.last_name === ""
      ) {
        toast.error('Ohh! You Missed Required Input, Please fill');
        flag = 1;
      } else {
        state.contacts.forEach((el) => {
          if (
            el.first_name === action.payload.first_name &&
            el.last_name === action.payload.last_name
          ) {
            toast.error('Name Already Exists In Contact');
            flag = 1;
          }
        });
      }

      if (!flag) {
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
      let Contacts = JSON.parse(localStorage.getItem("contacts"));
      let updatedContacts = Contacts.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      toast.success('Contact Removed Successfully');
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
        toast.error('Input Fields Cannot Be Left Empty');
        return state;
      } else {
        let flag = 0;
        let Contacts = JSON.parse(localStorage.getItem("contacts"));

        Contacts.forEach((el) => {
          if (
            el.id !== action.payload.id &&
            el.first_name === action.payload.first_name &&
            el.last_name === action.payload.last_name
          ) {
            toast.error('Name Already Exists!!');
            flag = 1;
            return state;
          }
        });

        if (flag) {
          return state;
        } else {
          let updatedContacts = Contacts.map((el) => {
            if (el.id === action.payload.id) {
              return { ...action.payload };
            } else {
              return el;
            }
          });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          toast.success('Contact has been Updated');
          return {
            ...state,
            contacts: updatedContacts,
          };
        }
      }
    }

    case VIEW_CONTACT: {
      return {
        ...state,
        selectedContactId: action.payload,
      };
    }

    default:
      return state;
  }
}
