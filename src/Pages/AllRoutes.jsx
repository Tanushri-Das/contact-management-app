import { Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import Dashboard from "./Charts_and_Maps";
import EditContact from "../Components/Edit_Contact";
import ContactForm from "../Components/ContactForm";
import View_Contact from "../Components/View_Contact";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/contact_form" element={<ContactForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/edit/:id" element={<EditContact />} />
      <Route path="/view/:id" element={<View_Contact />} />
    </Routes>
  );
};

export default AllRoutes;
