'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const section = document.getElementById('looks');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroWrapper>
      <Figure>
        <ImageWrapper>
          <StyledImage
            src="/jenna-cutout.png"
            alt="Jenna Ortega styled by Enrique"
            fill
            priority
            sizes="100vw"
          />
        </ImageWrapper>

        <Overlay>
          <FadeIn>
            <Headline>STYLED BY ENRIQUE MELENDEZ</Headline>
            <Subtext onClick={scrollToNext}>
              DISCOVER LOOKS <Icon />
            </Subtext>
          </FadeIn>
        </Overlay>
      </Figure>
    </HeroWrapper>
  );
};

export default Hero;


// --------------------------- STYLES ---------------------------

const HeroWrapper = styled.section`
  width: 100%;
  position: relative;
  background: #f8f8f8;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 40px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(248, 248, 248, 0) 0%,
      rgba(248, 248, 248, 0.5) 40%,
      rgba(248, 248, 248, 0.85) 75%,
      #f8f8f8 100%
    );
    box-shadow: inset 0 -10px 20px -10px rgba(0, 0, 0, 0.04);
    z-index: 5;
  }
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 100svh; // Optional: use here too
  margin: 0;
  padding: 0;
`;


const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  /* iPhone + iPad (portrait & landscape) */
  height: 100svh;

  @media (min-width: 1025px) {
    height: auto;
    max-height: min(100vh, 850px);
    aspect-ratio: 2 / 3;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: top center;

  @media (min-width: 1025px) {
    object-fit: contain;
    object-position: center top;
  }
`;



const Overlay = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2;
  pointer-events: none;
`;

const FadeIn = styled.div`
  animation: fadeInUp 1.2s ease-out both;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Headline = styled.h2`
  font-family: var(--sans);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  pointer-events: auto;
`;

const Subtext = styled.h3`
  font-family: var(--sans);
  font-size: 0.75rem;
  font-weight: 400;
  color: white;
  margin-top: 0.5rem;
  cursor: pointer;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: opacity 0.25s linear;

  &:hover {
    opacity: 0.6;
  }
`;

const Icon = styled(ChevronDown)`
  width: 0.95rem;
  height: 0.95rem;
  stroke-width: 1.5;
`;
