import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { closeModal } from 'store/reducers/modal/modalSlice'
import styles from './modal.module.scss'
const ModalWrapper = ({ show, content, size = 'md' }) => {
  const [modalIsOpen] = useState(show)
  const dispatch = useDispatch()
  const close = () => {
    dispatch(closeModal())
  }
  return (
    <div className="modal-c">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={close}
        contentLabel="Custom modal"
        className={`${styles.customModal} ${styles[size]}`}
        overlayClassName={styles.customOverlay}
        ariaHideApp={false}
      >
        <div className={styles.modalBody}>
          <div className={styles.scrollWrapper}>
            <span className={styles.close} onClick={close}>
              <i className="fa fa-times" aria-hidden="true" />
            </span>
            {content}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalWrapper
