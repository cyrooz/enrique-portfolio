'use client';

import styled from 'styled-components';
import Image from 'next/image';

const EditorialMoment = () => {
  return (
    <Section>
      <Quote>
        THE BEST STYLE ISN’T LOUD.  
        <br />IT’S PRECISE.
      </Quote>
      <LogoBar>
  <Logo src="/vogue.svg" alt="Vogue" width={100} height={40} />
  <Logo src="/dior.svg" alt="Dior" width={100} height={40} />
 
</LogoBar>

      <GridContainer>
      <GridHeader>
    <GridTitle>Featured Looks</GridTitle>
    <ViewGallery href="/gallery">View more</ViewGallery>
  </GridHeader>


      <ImageGrid>
        <ImageBlock>
        <ImageWrapper>
  <HoverOverlay className="overlay" />
  <HoverLabel className="hover-label">Jenna Ortega · 2024</HoverLabel>

  <StyledImage
    src="/jenna-look1.jpg"
    alt="Jenna Ortega"
    fill
    style={{ objectFit: 'cover' }}
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</ImageWrapper>

          <Caption>Jenna Ortega | Styled by Enrique Melendez</Caption>
        </ImageBlock>

        <ImageBlock>
        <ImageWrapper>
  <HoverOverlay className="overlay" />
  <HoverLabel className="hover-label">Jaylen Barron · 2025</HoverLabel>

  <StyledImage
              src="/jaylen-look.jpg"
              alt="Jaylen Barron"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
</ImageWrapper>

          <Caption>Jaylen Barron | Styled by Enrique Melendez</Caption>
        </ImageBlock>
        <ImageBlock>
        <ImageWrapper>
  <HoverOverlay className="overlay" />
  <HoverLabel className="hover-label">Jenna Ortega · 2023</HoverLabel>

  <StyledImage
    src="/jenna-look2.jpg"
    alt="Jenna Ortega"
    fill
    style={{ objectFit: 'cover' }}
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</ImageWrapper>
          <Caption>Jenna Ortega | Styled by Enrique Melendez</Caption>
        </ImageBlock>
      </ImageGrid>
      </GridContainer>
    </Section>
  );
};

export default EditorialMoment;


// --------------------------- STYLES ---------------------------

const Section = styled.section`
  background-color: #f8f8f8;
  padding: 0 1rem; // ⬅ tighter left/right padding
  text-align: center;

  @media (min-width: 500px) {
    padding: 0 1rem; // more breathing room on desktop
  }
`;

const LogoBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0 4rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
    flex-wrap: wrap;
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

  @media (min-width: 769px) and (max-width: 1024px) {
    object-fit: cover;
    object-position: center top;
  }
`;


const Logo = styled(Image)`
  height: auto;
  width: auto;
  max-height: 32px; /* ⬅ reduced from 40px */
  object-fit: contain;
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }
`;


const GridHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
padding-bottom: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`;


const GridContainer = styled.div.attrs(() => ({
  id: 'looks',
}))`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem; 
  
  scroll-margin-top: 4rem;

  @media (max-width: 768px) {
    scroll-margin-top: 2rem; // or even 1rem if your header is small
  }
`;




const GridTitle = styled.h3`
  font-family: var(--font-inter);
  font-size: 1.25rem;
  font-weight: 500;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ViewGallery = styled.a`
  font-family: var(--font-inter);
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #555;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
       transition: width 0.25s ease;
     text-decoration: underline;
  }
`;

const Quote = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 500;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 4rem 0;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    line-height: 1.75rem;
    margin: 2rem 0;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem; // ⬅ reduced from 3rem
    align-items: flex-start;
  }
`;


const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100svh; // fill available height
  overflow: hidden;

  @media (min-width: 1025px) {
    height: auto;
    max-height: min(100vh, 850px);
    aspect-ratio: 2 / 3;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
  pointer-events: none;
  border-radius: 2px;

  @media (hover: none) {
    display: none;
  }
`;


const HoverLabel = styled.span`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%, 8px);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: white;
  font-family: var(--font-inter);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 3;
  pointer-events: none;

  @media (hover: none) {
    display: none;
  }
`;


const Caption = styled.p`
  max-width: 520px;
  margin-top: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #888;
  font-family: var(--font-inter);
  text-align: center;
`;
