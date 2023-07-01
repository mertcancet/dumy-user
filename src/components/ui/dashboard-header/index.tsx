import React from 'react';
import Modal from 'react-modal';

import styles from './styles.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={() => setIsOpen(false)}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  );
};

export default DashboardHeader;
