import React from 'react';

import styles from './styles.module.css';
import AddNewStudentModal from '../modals/add-new-student-modal';

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const DashboardHeader: React.FC<Props> = ({ setSearch }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
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
