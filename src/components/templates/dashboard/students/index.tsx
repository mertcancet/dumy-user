import React, { useCallback, useEffect, useState } from 'react';

import { DashboardHeader, Pagination, StudentListTable } from '@/components/ui';

import { User } from '@/types/user';
import { Pagination as PaginationType } from '@/types/pagination';

import styles from './styles.module.css';

const DashboardStudentsPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [pagination, setPagination] = useState<PaginationType>({
    limit: 5,
    skip: 0,
  });

  const getAllUser = useCallback(() => {
    fetch(`https://dummyjson.com/users?limit=${pagination.limit}&skip=${pagination.skip}`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.users);
        setPagination({ limit: res.limit, skip: res.skip, total: res.total });
      });
  }, [pagination.limit, pagination.skip]);

  useEffect(() => {
    const delay = 300;
    let timer: string | number | NodeJS.Timeout | undefined;

    const delayRequest = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        getAllUser();
      }, delay);
    };

    delayRequest();

    return () => {
      clearTimeout(timer);
    };
  }, [getAllUser, pagination.limit, pagination.skip]);

  return (
    <div className={styles.container}>
      <DashboardHeader />
      {users && <StudentListTable users={users} setUsers={setUsers} />}
      {users && <Pagination pagination={pagination} setPagination={setPagination} />}
    </div>
  );
};

export default DashboardStudentsPage;
