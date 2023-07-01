import React from 'react';

import styles from './styles.module.css';
import AddNewStudentModal from '../modals/add-new-student-modal';

const DashboardHeader = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Students List</div>
        <div className={styles.action}>
          <input placeholder="Search..." className={styles.search} />
          <button className={styles.add} onClick={() => setIsOpen(true)}>
            ADD NEW STUDENT
          </button>
        </div>
      </div>
      <AddNewStudentModal isOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default DashboardHeader;
