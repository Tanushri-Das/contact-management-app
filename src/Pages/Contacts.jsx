
// Importing necessary components and functions from libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeContact } from "../Redux/action";
import { RxCrossCircled } from "react-icons/rx";

// Defining the Contacts component
const Contacts = () => {
  // Accessing contacts data from the Redux store
  const AllContacts = useSelector((store) => store.contacts);
  const dispatch = useDispatch();

  // Effect hook with empty dependency array, runs after initial render
  useEffect(() => {
    // This effect could be used for some side effect, but currently, it's empty
  }, [dispatch, AllContacts.length]);

  // JSX rendering starts here
  return (
    <div className="justify-center pt-16 text-gray-50 md:p-4 w-full">
      <div className="mt-24">
        {/* Button to navigate to the "Create Contact" page */}
        <button className="rounded bg-violet-600 py-2 px-3 text-lg md:text-xl">
          <Link to="/contact_form">Create Contact</Link>
        </button>
      </div>
      {/* Conditional rendering if no contacts are available */}
      {AllContacts.length == 0 && (
        <div className=" m-auto w-fit p-4 align-middle text-blue-500 justify-center">
          <h1 className="text-lg md:text-2xl flex text-black mt-6">
            {/* Displaying a cross icon and a message */}
            <RxCrossCircled className="text-4xl -mt-1 md:mt-1 me-1" /> No
            Contact Found Please add contact from <br /> Create Contact Button
          </h1>
        </div>
      )}
      {/* Displaying the list of contacts */}
      <div
        id="contact_list"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-8"
      >
        {AllContacts.map((el) => {
          return (
            <div
              key={el.id}
              className="bg-blue-950 rounded-lg shadow-md m-4 p-6 text-white"
            >
              <div className="w-full md:w-3/4 m-auto">
                <div className="">
                  {/* Displaying contact information */}
                  <p>First Name : {el.first_name}</p>
                  <p>Last Name : {el.last_name}</p>
                  <p>
                    Status : {el.status == "active" ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>
              {/* Buttons for edit, view, and delete actions */}
              {/* These buttons are conditionally displayed based on screen size */}
              <div className="grid grid-cols-1 sm:hidden">
                <Link to={`edit/${el.id}`}>
                  <button className="w-full mt-4 rounded p-2 font-semibold bg-violet-600 text-white">
                    Edit
                  </button>
                </Link>
                <Link to={`view/${el.id}`} className="">
                  <button className="w-full mt-2 rounded p-2 font-semibold bg-green-600 text-white">
                    View
                  </button>
                </Link>
                <button
                  onClick={() => dispatch(removeContact(el.id))}
                  className="rounded p-2 mt-2 font-semibold bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
              <div className="sm:flex justify-around mb-2 mt-8 hidden">
                <Link to={`edit/${el.id}`}>
                  <button className="rounded p-2 font-semibold bg-violet-600 text-white">
                    Edit
                  </button>
                </Link>
                <Link to={`view/${el.id}`}>
                  <button className="rounded p-2 font-semibold bg-green-600 text-white">
                    View
                  </button>
                </Link>
                <button
                  onClick={() => dispatch(removeContact(el.id))}
                  className="rounded p-2 font-semibold bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Exporting the Contacts component as default
export default Contacts;
