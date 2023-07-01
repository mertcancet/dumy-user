import React, { Dispatch, SetStateAction } from 'react';

import { Pen, Trash } from '../icons';
import EditStudentModal from '../modals/edit-student-modal';

import styles from './styles.module.css';

import { User } from '@/types/user';

type Props = {
  user: User;
  setUsers: Dispatch<SetStateAction<User[] | null>>;
};

const StudentListTableItem: React.FC<Props> = ({ user, setUsers }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const deleteUser = () => {
    fetch(`https://dummyjson.com/users/${user.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isDeleted) {
          setUsers((prev) => prev && prev.filter((user) => user.id !== res.id));
        }
      });
  };

  return (
    <>
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
          <button onClick={() => setIsOpen(true)}>
            <Pen />
          </button>
          <button onClick={deleteUser}>
            <Trash />
          </button>
        </div>
      </div>
      <EditStudentModal
        isOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        user={user}
        setUsers={setUsers}
      />
    </>
  );
};

export default StudentListTableItem;
