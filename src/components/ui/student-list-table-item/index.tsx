import React, { Dispatch, SetStateAction } from 'react';

import { Pen, Trash } from '../icons';

import { User } from '@/types/user';

import styles from './styles.module.css';

type Props = {
  user: User;
  setUsers: Dispatch<SetStateAction<User>>;
};

const StudentListTableItem: React.FC<Props> = ({ user, setUsers }) => {
  const deleteUser = () => {
    fetch(`https://dummyjson.com/users/${user.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isDeleted) {
          setUsers((prev) => prev.filter((user) => user.id !== res.id));
        }
      });
  };
  return (
    <div className={styles.list_layout}>
      <div>
        <img
          src={user.image}
          alt={user.firstName + user.lastName}
          width={65}
          height={55}
          className={styles.avatar}
        />
      </div>
      <div className={styles.cell}>
        {user.firstName} {user.lastName}
      </div>
      <div className={styles.cell}>{user.email}</div>
      <div className={styles.cell}>{user.phone}</div>
      <div className={styles.cell}>{user.domain}</div>
      <div className={styles.cell}>{user.company.name}</div>
      <div className={styles.action}>
        <button>
          <Pen />
        </button>
        <button onClick={deleteUser}>
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default StudentListTableItem;
