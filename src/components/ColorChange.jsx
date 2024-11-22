import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../assets/images/colorchage-image.png';  // Path to your image

const ColorChooser = () => {
    const [selectedColor, setSelectedColor] = useState('');

    // List of predefined colors (can be customized)
    const availableColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#1ABC9C',];

    // Handle color selection from the list
    const handleColorSelect = (color) => {
        // Toggle the color selection
        if (selectedColor === color) {
            setSelectedColor(''); // Deselect if the same color is clicked
        } else {
            setSelectedColor(color); // Set the new color
        }
    };

    return (


        <div className='p-2 d-flex flex-column justify-content-center align-items-center'>

            <h2>Color Overlay</h2>
            <p><strong>Here you can add a colored overlay to an image with a transparent background. The overlay is applied by loading the image twice and using a dropshadow with the chosen color.</strong></p>
            <div className="product-modal-image-wrapper" style={{ position: 'relative', width: '20rem', height: '20rem', zIndex: '-2', overflow: 'hidden', border: '10px solid #ffdca7' }}>
                <ImageLoader
                    alt="Product"
                    className="product-modal-image"
                    src={image} // Use the imported image
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        mixBlendMode: 'screen',
                        position: 'relative',
                        zIndex: -1,
                    }}
                />
                {/* Conditionally render the duplicate image only when a color is selected */}
                {selectedColor && (
                    <ImageLoader
                        alt="Product with color filter"
                        className="product-modal-image-duplicate"
                        style={{
                            filter: `drop-shadow(0px 1000px 0px ${selectedColor})`,
                            position: 'absolute',
                            inset: 0,
                            zIndex: 10,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            opacity: 0.5,
                            transform: 'translateY(-1000px)',
                        }}
                        src={image}
                    />
                )}
            </div>

            <ColorListContainer>
                {availableColors.map((color) => (
                    <ColorItem
                        key={color}
                        color={color}
                        onClick={() => handleColorSelect(color)} // Handle color selection
                        isSelected={selectedColor === color} // Highlight selected color
                    />
                ))}
            </ColorListContainer>
        </div>
    );
};

// Prop validation (No need to pass any props anymore)
ColorChooser.propTypes = {
    // No props needed now since you're not passing anything from a parent
};


// Styled-components
const ColorListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;



const ColorItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
  border: ${(props) => (props.isSelected ? '3px solid #000' : 'none')}; // Highlight selected color with a border
  box-shadow: ${(props) => (props.isSelected ? '0px 1000px 0px rgba(0, 0, 0, 0.3)' : 'none')};

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageLoader = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease-in-out;
`;

export default ColorChooser;
