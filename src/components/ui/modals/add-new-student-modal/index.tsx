import React, { useState } from 'react';
import Modal from '..';

import styles from './styles.module.css';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddNewStudentModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [inputs, setInputs] = useState<any>({});

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: inputs.name,
        email: inputs.email,
        phone: inputs.phone,
        domain: inputs.website,
        company: { name: inputs.companyName },
      }),
    })
      .then((res) => res.json())
      .then(() => setIsOpen(false));
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            placeholder="Name"
            type="text"
            name="name"
            value={inputs.name || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            placeholder="Email"
            type="email"
            name="email"
            value={inputs.email || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Phone
          <input
            className={styles.input}
            placeholder="Phone"
            type="tel"
            name="phone"
            value={inputs.phone || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Website
          <input
            className={styles.input}
            placeholder="Website"
            type="text"
            name="website"
            value={inputs.website || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          Company Name
          <input
            className={styles.input}
            placeholder="Company Name"
            type="text"
            name="companyName"
            value={inputs.companyName || ''}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className={styles.submit}>
          Add New Student
        </button>
      </form>
    </Modal>
  );
};

export default AddNewStudentModal;
