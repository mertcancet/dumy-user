import React, { useState } from 'react';

import styles from './styles.module.css';
import { ArrowLeft, ArrowRight } from '../icons';

const Pagination = () => {
  const [perPage, setPerPage] = useState('5');

  return (
    <div className={styles.container}>
      <div className={styles.row_per_page}>
        <label htmlFor="per-page"> Rows Per Page:</label>
        <select
          name="per-page"
          id="per-page"
          className={styles.select}
          value={perPage}
          onChange={(e) => setPerPage(e.target.value)}
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="8">9</option>
          <option value="8">10</option>
        </select>
      </div>
      <div className={styles.pagination}>
        <span>1-5 of 1240</span>
        <div className={styles.action}>
          <button>
            <ArrowLeft width={24} height={24} />
          </button>
          <button>
            <ArrowRight width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
