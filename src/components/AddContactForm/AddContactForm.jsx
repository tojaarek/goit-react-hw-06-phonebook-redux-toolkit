import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';
import form from './AddContactForm.module.css';

const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [contact, setContacts] = useState({ name: '', number: '' });

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const duplicateContact = contacts.find(
      existingContact => existingContact.name === contact.name
    );
    if (duplicateContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact.name, contact.number));
    form.reset();
  };

  const handleChange = event => {
    setContacts(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className={form.formBorder} onSubmit={handleSubmit}>
      <label className={form.label} htmlFor="name">
        Name
        <input
          className={form.input}
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я ]+((['\-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={form.label} htmlFor="phone-number">
        Number
        <input
          className={form.input}
          onChange={handleChange}
          id="phone-number"
          type="tel"
          name="number"
          pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={form.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default AddContactForm;
