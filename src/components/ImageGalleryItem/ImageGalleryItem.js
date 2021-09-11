import PropTypes from 'prop-types';

import st from '../styles.module.css';

function ImageGalleryItem({ webformatURL, largeImageURL, tags,  onOpenModal }) {
  return (
    <li className={st.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className={st.ImageGalleryItem_image}
        onClick={onOpenModal}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;