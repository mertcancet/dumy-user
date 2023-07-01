import React from 'react';

import styles from './styles.module.css';

const StudentListTableItem = () => {
  return (
    <div className={styles.list_layout}>
      <div>image</div>
      <div>John Doe</div>
      <div>john@gmail.com</div>
      <div>7305477760</div>
      <div>karthi.lorem.com</div>
      <div>Deckow-Crist</div>
      <div>icons</div>
    </div>
  );
};

export default StudentListTableItem;
