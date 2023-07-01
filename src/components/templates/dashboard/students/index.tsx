import React, { useEffect, useState } from 'react';

import { DashboardHeader, Pagination, StudentListTable } from '@/components/ui';
import styles from './styles.module.css';

import { User } from '@/types/user';

const DashboardStudentsPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const getAllUser = () => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((res) => setUsers(res));
  };
  useEffect(() => {
    getAllUser();
  }, []);

  console.log(users);
  return (
    <div className={styles.container}>
      <DashboardHeader />
      {users && <StudentListTable users={users} />}
      <Pagination />
    </div>
  );
};

export default DashboardStudentsPage;
