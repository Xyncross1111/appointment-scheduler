import React from "react";

export const ContactPicker = (props) => {

    const contacts = props.contacts;

    const options = contacts.map( (contact) => <option value={props.contact} key={contact} >{contact.name}</option>)

  return (
    <select onChange={props.handleChange} name={props.name} value={props.value}>
        <option value={""} >No Contact Selected</option>
        {options}

    </select>
  );
};
