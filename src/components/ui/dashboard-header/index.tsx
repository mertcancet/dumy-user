import React from 'react';

import AddNewStudentModal from '../modals/add-new-student-modal';

import styles from './styles.module.css';

import { Pagination } from '@/types/pagination';

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
};

const DashboardHeader: React.FC<Props> = ({ search, setSearch, setPagination }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [inputValue, setInputValue] = React.useState(search);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPagination({
        limit: 5,
        skip: 0,
      });
      setSearch(inputValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue, 500]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Students List</div>
        <div className={styles.action}>
          <input
            placeholder="Search..."
            className={styles.search}
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
          />
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
