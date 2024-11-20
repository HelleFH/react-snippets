import React, { useEffect, useState } from 'react';
import photosData from '../data/PhotosData';
import { Modal } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

;

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
      <div id="container">

        <div className="photos-container" id="photos" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {photos.map((photo, index) => (
            <div key={photo.id} className="photo-wrapper" style={{ position: 'relative' }}>
              <div className="image-wrapper" onClick={() => handleImageClick(index)} style={{ cursor: 'pointer' }}>
                <img src={photo.images[0]} alt={photo.name} className="photo-image" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for displaying selected photo */}
        {selectedPhotoIndex !== null && (
          <Modal show={showModal} onHide={handleClose} centered>
            <div className="modal-content">
              <Modal.Body {...handlers}>
                <button className="close-button" onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', fontSize: '24px', color: '#000' }}>&times;</button>

                <button className="chevron-left" onClick={handlePrev} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none' }}>
                  <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                </button>

                <div className="modal-image-container" style={{ textAlign: 'center' }}>
                  <img
                    src={photos[selectedPhotoIndex].images[0]} // Ensure the image path is correct
                    alt={photos[selectedPhotoIndex].name}
                    className="modal-image"
                    style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
                  />
                </div>

                <button className="chevron-right" onClick={handleNext} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none' }}>
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

