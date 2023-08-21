import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {

    const [ name, setName] = useState('');
    const [ contact, setContact ] = useState('');
    const [ date, setDate ] = useState('');
    const [ time, setTime ] = useState('');

    const addAppointment = (title, contact, date, time) => {
        props.addAppointment(title, contact, date, time)
    }

  const handleSubmit = (e) => {
    e.preventDefault();

      addAppointment(name, contact, date, time);
      setName('')
      setContact('')
      setDate('')
      setTime('')

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
          <AppointmentForm
              contacts={props.contacts}
              name={name} setName={setName}
              date={date} setDate={setDate}
              time={time} setTime={setTime}
              contact={contact} setContact={setContact}

              handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
          <TileList list={props.appointments}/>
      </section>
    </div>
  );
};