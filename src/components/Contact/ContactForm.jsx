import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      const cleanedNumber = value.replace(/[^0-9+,]/g, '');
      setNumber(cleanedNumber);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!name || !number) {
      return;
    }

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with name "${name}" already exists!`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone number:
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
