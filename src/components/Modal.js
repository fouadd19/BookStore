import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import './Modal.css';

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <CloseIcon />
          </button>
          <div className="inner-box">
            <div className="info">
              <h2>Title: {item.volumeInfo.title}</h2>
              <h3>authors: {item.volumeInfo.authors}</h3>
              <h4>Page-Count: {item.volumeInfo.pageCount}</h4>
              <h5>
                Publisher: {item.volumeInfo.publisher} <br />
                Language: {item.volumeInfo.language}
              </h5>
              <br />
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
