import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from './react-tinder-card/index';
import profiles from '../data/profiles';
import { FaTimes, FaHeart, FaUndo, FaStar, FaInfoCircle } from 'react-icons/fa';
import Modal from './modal';
import { Link } from 'react-router-dom';
import Photos from './Gallery';
import Navbar from './Navbar';


function FindMatches() {
  const [showSwipedMessage, setShowSwipedMessage] = useState(false);
  const [lastDirection, setLastDirection] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [storedProfile, setStoredProfile] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(profiles.length - 1);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(
    () => Array(profiles.length).fill().map(() => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < profiles.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction, _nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    setShowSwipedMessage(true);

    setTimeout(() => {
      setShowSwipedMessage(false);
    }, 1000);
  };

  const outOfFrame = (_name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < profiles.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const openModal = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(storedProfile); // Restore the stored profile if available
  };

  useEffect(() => {
    // Retrieve the selected profile from localStorage on initial load
    const storedProfileString = localStorage.getItem("selectedProfile");
    if (storedProfileString) {
      const storedProfile = JSON.parse(storedProfileString);
      setStoredProfile(storedProfile);
      setSelectedProfile(storedProfile);
    }
  }, []);

  return (

  

      <div className='swipecards-container'>
      <h2>Tinder-like Swipe Cards</h2>


      {showSwipedMessage && (
        <h3 className="infoText">You swiped {lastDirection}</h3>
      )}

      <div className="card-container">
        {profiles.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div className="card">
              <div className="card-image-container">
                <img
                  src={character.image}
                  draggable="false"
                  alt={`${character.name}'s profile`}
                />
                <div className="card-information">
                  <p>
                    {character.name}, {character.age}
                  </p>
                  <p>
                    {character.occupation}, {character.location}
                  </p>
                  <div className="info-button">
                    <a
                      href="/"
                      onClick={(event) => {
                        event.preventDefault();
                      }}
                    >
                      <FaInfoCircle />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-buttons">
                <a onClick={(e) => { e.preventDefault(); swipe('left'); }}>
                  <FaTimes />
                </a>
                <a onClick={goBack}>
                  <FaUndo />
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); swipe('right'); }}>
                  <FaHeart />
                </a>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      </div>
         
  );
}

export default FindMatches;
