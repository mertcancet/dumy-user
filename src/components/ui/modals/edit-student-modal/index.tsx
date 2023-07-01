import React, { useState } from 'react';
import Modal from '..';

import { User } from '@/types/user';

import styles from './styles.module.css';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
  setUsers: React.Dispatch<React.SetStateAction<User[] | null>>;
};
const EditStudentModal: React.FC<Props> = ({ isOpen, setIsOpen, user, setUsers }) => {
  const [inputs, setInputs] = useState<any>({
    name: user.firstName + ' ' + user.lastName,
    email: user.email,
    phone: user.phone,
    website: user.email,
    companyName: user.company.name,
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`https://dummyjson.com/users/${user.id}`, {
      method: 'PUT',
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
      .then((res) => {
        setUsers(
          (prev) =>
            prev &&
            prev.map((user) => {
              console.log('slllll');
              if (user.id === res.id) {
                return res;
              } else return user;
            })
        );

        setIsOpen(false);
      });
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
          Update Student
        </button>
      </form>
    </Modal>
  );
};

export default EditStudentModal;
