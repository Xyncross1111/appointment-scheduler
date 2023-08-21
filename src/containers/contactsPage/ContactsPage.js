import React, { useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

    const [ name, setName ] = useState('');
    const [ email, setEmail] = useState('');
    const [ phone, setPhone ] = useState('');

    const contacts = props.contacts;
    const contactNames = contacts.map( x => x.name)

    const addContact = (name, phone, email) => {
        props.addContact(name, phone, email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /* Add contact info and clear data if the contact name is not a duplicate */

        if(contactNames.includes(name)) alert('Contact already exists!')
        else {
            addContact(name, phone, email);
            console.log('added')
            setName('');
            setPhone('');
            setEmail('');
        }
    };


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
          <ContactForm
              name={name} setName={setName}
              phone={phone} setPhone={setPhone}
              email={email} setEmail={setEmail}

              handleSubmit={handleSubmit}

          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
          <TileList list={contacts} />
      </section>
    </div>
  );
};
