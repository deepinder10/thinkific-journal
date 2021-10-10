import { useRef } from 'react';
import styles from './Modal.module.scss';
import { useClickOutside } from '@/hooks/useClickOutside';
import PropTypes from 'prop-types';
import { useEscapeKeyHandler } from '@/hooks/useEscapeKeyHandler';

const Modal = ({ title, description, onClose, children }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => {
    onClose();
  });
  useEscapeKeyHandler(modalRef, () => {
    onClose();
  });
  return (
    <>
      <div className={styles.backdrop} />
      <div
        className={styles.modal}
        role="dialog"
        aria-modal={true}
        aria-labelledby={title}
        aria-describedby={description}>
        <div ref={modalRef} className={styles.modal__body}>
          {children}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
