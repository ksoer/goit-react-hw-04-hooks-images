  
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import st from '../styles.module.css';

const rootModal = document.querySelector('#rootModal');

function Modal({ largeImageURL, onToggleModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleModal]);

 const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

    return createPortal(
      <div className={st.Overlay} onClick={handleBackdropClick}>
        <div className={st.Modal}> 
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      rootModal,
    );
  }


Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;