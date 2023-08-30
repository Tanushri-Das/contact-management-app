
// Importing necessary components and functions from libraries
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editContact } from "../Redux/action";

function EditContact() {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allContacts = useSelector((store) => store.contacts);

  // State to manage the form data
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    status: "active",
  });

  // Event handler for input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Effect to pre-fill form fields with contact data for editing
  useEffect(() => {
    const contact = allContacts.find((el) => el.id == id);
    if (contact) {
      setForm(contact);
    }
  }, [allContacts, id]);

  // Event handler for saving edited contact
  function handleSave() {
    dispatch(editContact({ id, ...form })); // Dispatch the editContact action
    navigate("/"); // Navigate back to the home page
  }

  // JSX rendering starts here
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto my-4 px-2 py-2 md:px-0 md:py-0 pt-16">
      <h2 className="text-xl md:text-2xl font-bold my-8 md:mt-36">
        Edit Contact
      </h2>
      <div className="shadow-lg p-8 border rounded-lg">
        {/* First Name input */}
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-start text-lg"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            id="first-name"
            type="text"
            name="first_name"
            value={form.first_name || ""}
            onChange={handleChange}
          />
        </div>
        {/* Last Name input */}
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-start text-lg"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            id="last-name"
            type="text"
            name="last_name"
            value={form.last_name || ""}
            onChange={handleChange}
          />
        </div>

        {/* Status radio buttons */}
        <div className="mb-4">
          <label className="block font-bold mb-2 text-start text-lg">
            Status
          </label>
          <div className="text-start">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="status"
                value="active"
                checked={form.status === "active"}
                onChange={handleChange}
              />
              <span className="ml-2">Active</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                className="form-radio"
                name="status"
                value="inactive"
                checked={form.status === "inactive"}
                onChange={handleChange}
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>

        {/* Save button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save Edited Contact
        </button>
      </div>
    </div>
  );
}

// Export the EditContact component as default
export default EditContact;
