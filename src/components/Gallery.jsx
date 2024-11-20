import React, { useEffect, useState } from 'react';
import photosData from '../data/PhotosData';
import { Modal } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import xIcon from '../assets/images/x_icon.svg';  // Path to your x icon


const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  useEffect(() => {
    setPhotos(photosData); // Set the photos data when the component mounts
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setSelectedPhotoIndex(null);
  };

  const handleImageClick = (index) => {
    setSelectedPhotoIndex(index);
    setShowModal(true);
  };

  const handleNext = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  return (
    <>
      <div id="gallery-container">
        <h2 className='gallery-header'>This is a lightbox gallery made with Bootstrap</h2>
        <div className="photos-container" id="photos">
          {photos.map((photo, index) => (
            <div key={photo.id} className="photo-wrapper" style={{ position: 'relative' }}>
              <div className="image-wrapper" onClick={() => handleImageClick(index)} style={{ cursor: 'pointer' }}>
                <img src={photo.images[0]} alt={photo.name} className="photo-image" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for displaying selected photo */}
        {selectedPhotoIndex !== null && (
          <Modal show={showModal} onHide={handleClose} centered>
            <div className="modal-content">
              <Modal.Body {...handlers}>
                <button


                  className="close-button"
                  onClick={handleClose}
                  style={{
                    position: 'absolute',
                    top: '-5px', // Keeps it near the top
                    right: '2px', // Positions it at the top-right corner
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    color: '#000',
                    zIndex: 1050, // Ensures it's on top of other modal elements
                  }}
                >
      <a className="closemodal-button">
        <img
          src={ xIcon}  // Toggle the icon based on the nav state
          alt="Close Modal"
          style={{
          width: '18px',
          top:'5px',
          left:'1px',
          position: 'relative',
          }}
        />
      </a>                </button>
                <button className="chevron-left" onClick={handlePrev} style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none',color:'#252425' }}>
                  <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                </button>

                <div className="modal-image-container" style={{ textAlign: 'center' }}>
                  <img
                    src={photos[selectedPhotoIndex].images[0]} // Ensure the image path is correct
                    alt={photos[selectedPhotoIndex].name}
                    className="modal-image"
                  />
                </div>

                <button className="chevron-right" onClick={handleNext} style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none',color:'#252425' }}>
                  <FontAwesomeIcon icon={faChevronRight} size="2x" />
                </button>
              </Modal.Body>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Photos;


