import React from 'react';

import { Pen, Trash } from '../icons';

import styles from './styles.module.css';

import { User } from '@/types/user';

type Props = {
  user: User;
};

const StudentListTableItem: React.FC<Props> = ({ user }) => {
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
        <button>
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default StudentListTableItem;
