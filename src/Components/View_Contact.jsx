
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectContactById } from "../Redux/selectors";

const View_Contact = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();

  // Retrieve contact data using the 'selectContactById' selector from Redux
  const contact = useSelector((state) =>
    selectContactById(state, parseInt(id))
  );

  // Display loading message if contact data is not available
  if (!contact) {
    return <div>Loading...</div>;
  }

  // JSX rendering starts here
  return (
    <div className="flex justify-center items-center mt-44">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-8">Contact Details</h2>

        {/* Contact details section for small screens */}
        <div className="shadow-lg border m-2 py-8 md:hidden">
          <h4 className="text-lg font-medium">ContactId : {contact.id}</h4>
          <h4 className="text-lg font-medium">
            First name : {contact.first_name}
          </h4>
          <h4 className="text-lg font-medium">
            Last name : {contact.last_name}
          </h4>
          <h4 className="text-lg font-medium">Status : {contact.status}</h4>
        </div>

        {/* Contact details table for medium and larger screens */}
        <div className="flex justify-center">
          {/* Flex container to center the table */}
          <table className="w-full md:w-auto bg-white mt-4 hidden md:block">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-lg">ID</th>
                <th className="py-2 px-4 border-b text-lg">First Name</th>
                <th className="py-2 px-4 border-b text-lg">Last Name</th>
                <th className="py-2 px-4 border-b text-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b text-center">{contact.id}</td>
                <td className="py-2 px-4 border-b text-center">
                  {contact.first_name}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {contact.last_name}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {contact.status}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default View_Contact;
