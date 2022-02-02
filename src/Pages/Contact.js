import React from "react";
import { Link } from "react-router-dom";
import ContaactFooter from "./SubContainer/ContactContainer/ContaactFooter";
import ContactHeader from "./SubContainer/ContactContainer/ContactHeader";
import ContactSection from "./SubContainer/ContactContainer/ContactSection";

function Contact() {
  return (
    <React.Fragment>
      <ContactHeader />
      <ContactSection />
      <ContaactFooter />
    </React.Fragment>
  );
}

export default Contact;
