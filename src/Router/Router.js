import { Route, Routes } from "react-router-dom";
import EditContact from "../Components/Edit_Contact";
import ContactForm from "../Components/ContactForm";
import View_Contact from "../Components/View_Contact";
import Contacts from "../Pages/Contacts";
import Dashboard from "../Pages/Charts_and_Maps";

const Router = () => {
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

export default Router;
