import Modal from 'react-modal';
import css from '../ImageModal/ImageModal.module.css';
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

export default function ImageModal({ modalIsOpen, closeModal, imageContent }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={css.modal}>
          <img
            className={css.img}
            src={imageContent.urls.small}
            alt={imageContent.alt_description}
          />
          <p className={css.text}>Likes: {imageContent.likes}</p>

          {imageContent.description && (
            <p className={css.text}> Description: {imageContent.description}</p>
          )}
        </div>
      </Modal>
    </div>
  );
}
