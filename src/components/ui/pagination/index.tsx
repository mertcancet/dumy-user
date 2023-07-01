import React, { Dispatch, SetStateAction } from 'react';

import { ArrowLeft, ArrowRight } from '../icons';

import styles from './styles.module.css';

import { Pagination } from '@/types/pagination';

type Props = {
  pagination: Pagination;
  setPagination: Dispatch<SetStateAction<Pagination>>;
};

const Pagination: React.FC<Props> = ({ pagination, setPagination }) => {
  const prevHandler = () => {
    if (pagination.skip !== 0) {
      setPagination({ ...pagination, skip: pagination.skip - pagination.limit });
    }
  };
  const nextHandler = () => {
    if (pagination.total && pagination.skip < pagination.total - pagination.limit) {
      setPagination((prev) => ({ ...prev, skip: pagination.skip + pagination.limit }));
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.row_per_page}>
        <label htmlFor="per-page">
          Rows Per Page:
          <select
            name="per-page"
            id="per-page"
            className={styles.select}
            value={pagination.limit}
            onChange={(e) => setPagination({ ...pagination, limit: Number(e.target.value) })}
          >
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
      </div>
      <div className={styles.pagination}>
        <span>
          {pagination.skip + 1}-{pagination.skip + pagination?.limit} of {pagination.total}
        </span>
        <div className={styles.action}>
          <button onClick={prevHandler}>
            <ArrowLeft width={24} height={24} />
          </button>
          <button onClick={nextHandler}>
            <ArrowRight width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
