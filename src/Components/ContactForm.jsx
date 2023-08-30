import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/action";
import { toast } from "react-toastify";

function ContactForm() {
  const dispatch = useDispatch();

  const initialFormState = {
    first_name: "",
    last_name: "",
    status: "active",
  };

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    dispatch(addContact(form));
    toast.success('Contact Saved Successfully!!!'); // Show success message
    setForm(initialFormState); // Reset form fields after saving
     
  }

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto my-4 px-2 py-2 md:px-0 md:py-0 pt-16">
      <h2 className="text-xl md:text-2xl font-bold my-8 md:mt-36">Create Contact</h2>
      <div className="shadow-lg border p-4 md:p-8">
        <div className="mb-4">
          <label className="block font-bold mb-2 text-start text-lg" htmlFor="first-name">
            First Name
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            id="first-name"
            type="text"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-start text-lg" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-md"
            id="last-name"
            type="text"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-start text-lg">Status</label>
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
          Save Contact
        </button>
      </div>
    </div>
  );
}

export default ContactForm;