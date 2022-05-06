import React,{ useEffect, useState } from 'react';
import Modal from 'react-modal';
import './styles.scss';

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

Modal.setAppElement('#root');

export function ModalComponent(pJson) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = `${props => props.theme.colors.titleColor}` ;
  }

  const closeModal = () => {
    setIsOpen(false);
  }
 
  return (
    <div>
      <div className="button button-modal" onClick={openModal}>Ver mais</div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="title" ref={(_subtitle) => (subtitle = _subtitle)}>aaa</h2>
        <div>
          <ul>
            <li>* Item 1</li>
          </ul>
        </div>
        <div className="button" onClick={closeModal}>Fechar</div>
      </Modal>
    </div>
  )
}