import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectContactById } from '../Redux/selectors';

const View_Contact = () => {
  const { id } = useParams();
  const contact = useSelector(state => selectContactById(state, parseInt(id)));

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center mt-44">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-8">Contact Details</h2>
      
        <table className="min-w-full bg-white mt-4">
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
              <td className="py-2 px-4 border-b text-center">{contact.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View_Contact;
