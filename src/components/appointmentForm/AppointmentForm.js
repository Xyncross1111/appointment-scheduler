import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
                                  contacts,
                                  name,
                                  setName,
                                  contact,
                                  setContact,
                                  date,
                                  setDate,
                                  time,
                                  setTime,
                                  handleSubmit
                                }) => {

    const handleChange = (e) => {
        setContact(e.target.value)
    }

  return (
      <form onSubmit={handleSubmit} >
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" onChange={ (e) => setName(e.target.value)} />
          <label>Date</label>
          <input type="date" name="date" min={getTodayString()} onChange={ (e) => setDate(e.target.value)} />
          <label>Time</label>
          <input type="time" name="time" placeholder="Time" onChange={ (e) => setTime(e.target.value)} />
          <ContactPicker
              name={"contact"}
              value={contact}
              contacts={contacts}
              handleChange={handleChange} />
          <input type="submit" value={"Submit"} />
      </form>
  );
};
