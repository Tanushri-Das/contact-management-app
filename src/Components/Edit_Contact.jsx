import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from "../Redux/action";

function EditContact() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const allContacts = useSelector((store) => store.contacts);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    dispatch(editContact({ id, ...form }));
    setForm({
      first_name: "",
      last_name: "",
      status: "active",
    }); // Reset the form fields
  }

  useEffect(() => {
    const contact = allContacts.find((el) => el.id == id);
    if (contact) {
      setForm(contact);
    }
  }, [allContacts, id]);

  // Log the form state after resetting
  useEffect(() => {
    console.log("Form After Reset:", form);
  }, [form]);

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto my-4 px-2 py-2 md:px-0 md:py-0 pt-16">
      <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
      <div className="shadow-lg p-8 border">
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="first-name">
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
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="last-name">
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

        <div className="mb-4">
          <label className="block font-bold mb-2">Status</label>
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

export default EditContact;
