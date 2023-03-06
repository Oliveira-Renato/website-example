import React, { useEffect, useState } from 'react';
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

export function ModalComponent(pData) {
  var data = pData.jsonData ? pData.jsonData : {};
  var dataId = pData.jsonId ? pData.jsonId : {};
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log('id',pData)
  const openModal = (a) => setIsOpen(true);
  const afterOpenModal = () => subtitle.style.color = `${props => props.theme.colors.titleColor}`;
  const closeModal = () => setIsOpen(false);
  console.log('entrou')
  return (
    <div>
      <div className="button button-modal" onClick={() => openModal(dataId)} value='1'>Ver mais</div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="title" ref={(_subtitle) => (subtitle = _subtitle)}>{ }</h2>
        <div className="modal-list" >
          <h3>{data.titulo}</h3>
          <ul>
            {data.content.indexOf('-') !== -1 ? (
              (data.content.split('-')).map((item, index) =>
                <li key={index}>{item}</li>
              )
            ) : (
              <li>{data.content}{console.log(data)}</li>
             
            )}
          </ul>

          <div className='btn-fechar'>
            <div className="button" onClick={closeModal}>Fechar</div>
          </div>
        </div>
        

      </Modal>
    </div>
  )
}