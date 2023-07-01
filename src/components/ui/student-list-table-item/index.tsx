import React from 'react';

import { Pen, Trash } from '../icons';

import styles from './styles.module.css';

import { User } from '@/types/user';

type Props = {
  user: User;
};

const StudentListTableItem: React.FC<Props> = ({ user }) => {
  console.log(user);
  return (
    <div className={styles.list_layout}>
      <div>image</div>
      <div>John Doe</div>
      <div>john@gmail.com</div>
      <div>7305477760</div>
      <div>karthi.lorem.com</div>
      <div>Deckow-Crist</div>
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
