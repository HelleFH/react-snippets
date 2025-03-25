import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const funFacts = [
  {
    ID: 1,
    title: 'Did You Know?',
    fact: 'Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat!',
  },
  {
    ID: 2,
    title: 'Space Fact',
    fact: 'A day on Venus is longer than a year on Venus. It takes 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun.',
  },
  {
    ID: 3,
    title: 'Animal Wonder',
    fact: 'Octopuses have three hearts and their blood is blue due to the presence of hemocyanin.',
  },
  {
    ID: 4,
    title: 'Nature Surprise',
    fact: 'Bananas are berries, but strawberries are not! Botanically speaking, a berry must have seeds and pulp that develop from a single flower ovary.',
  },
];

const CarouselContainer = styled.div`
  max-width: 500px;
  padding: 2rem;
  background-color:#ffa3bf;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
    color: #212427;

`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const FactText = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

const FunFactsCarousel = () => {
  return (
    <CarouselContainer>
      <Slider {...settings}>
        {funFacts.map((fact) => (
          <div key={fact.ID}>
            <Title>{fact.title}</Title>
            <FactText>{fact.fact}</FactText>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default FunFactsCarousel;
