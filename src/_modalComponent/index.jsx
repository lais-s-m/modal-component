import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  ModalBackground,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
} from './style';

const Modal = ({
  isOpen,
  hide,
  modalTitle,
  hasFooter = false,
  id = 'modalBackground',
  children,
}) => {
  const closeModal = (event) => {
    if (event.target.id === id) {
      hide();
    }
  };

  return isOpen
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalBackground id={id} onClick={(event) => closeModal(event)}>
            <ModalDialog aria-modal aria-hidden tabIndex={-1} role="dialog">
              <ModalHeader>
                <h5>{modalTitle}</h5>
                <span
                  aria-hidden="true"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  &times;
                </span>
              </ModalHeader>
              <ModalContent>{children}</ModalContent>
              {hasFooter && (
                <ModalFooter>
                  <button
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    Fechar
                  </button>
                </ModalFooter>
              )}
            </ModalDialog>
          </ModalBackground>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  hasFooter: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.node
}