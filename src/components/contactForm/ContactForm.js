import React from "react";

export const ContactForm = ({
  setName,
  setPhone,
  setEmail,
  handleSubmit
}) => {
     return (
          <form onSubmit={handleSubmit} >
              <label>Name</label>
              <input type="text" name="name" placeholder="Name" onChange={ (e) => setName(e.target.value)} />
              <label>Phone Number</label>
              <input type="text" name="phone" placeholder="Phone Number" onChange={ (e) => setPhone(e.target.value)} />
              <label>Email Address</label>
              <input type="text" name="email" placeholder="Email Address" onChange={ (e) => setEmail(e.target.value)} />
              <input type="submit" value={"Submit"} />
          </form>
     );
};

