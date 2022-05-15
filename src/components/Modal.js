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
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>{item.volumeInfo.pageCount} Pages</h4>
              <h4>
                Publisher: {item.volumeInfo.publisher} <br />
                Language: {item.volumeInfo.language}
              </h4>
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
