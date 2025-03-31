import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const funFacts = [
  {
    ID: 1,
    title: 'React Origin',
    fact: 'React was created by Jordan Walke, a software engineer at Facebook, in 2013.',
  },
  {
    ID: 2,
    title: 'Virtual DOM',
    fact: 'React uses a Virtual DOM to optimize rendering and improve performance.',
  },
  {
    ID: 3,
    title: 'Component-Based',
    fact: 'React is component-based, allowing developers to reuse UI elements efficiently.',
  },
  {
    ID: 4,
    title: 'Hooks Revolution',
    fact: 'React Hooks, introduced in React 16.8, allow functional components to use state and lifecycle features.',
  },
  {
    ID: 5,
    title: 'React Native',
    fact: 'React Native enables building mobile apps using React, compiling to native code for iOS and Android.',
  },
  {
    ID: 6,
    title: 'JSX Power',
    fact: 'React uses JSX, a syntax extension that allows writing HTML-like code within JavaScript.',
  },
];

const CarouselContainer = styled.div`
  max-width: 500px;
  width:96vw;
  padding: 2rem;
  background-color: #ffa3bf;
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
