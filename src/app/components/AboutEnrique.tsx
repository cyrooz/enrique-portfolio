'use client';

import styled from 'styled-components';
import Image from 'next/image';

const AboutEnrique = () => {
  return (
    <Section>
      <Container>
        <Content>
          <ImageColumn>
            <Image
              src="/enrique.jpg"
              alt="Enrique Melendez"
              width={520}
              height={624} // ≈ 5:6 ratio
              style={{
                objectFit: 'cover',
                borderRadius: '2px',
                width: '100%',
                height: 'auto',
              }}
              priority
            />
          </ImageColumn>

          <TextColumn>
            <Title>The Stylist</Title>
            <Bio>
              <strong>Enrique Melendez</strong> is a Los Angeles native whose love for wardrobe and design began at an early age. Inspired by the visual language of fashion, he started sketching looks before he ever styled a client. Over the years, his personal style evolved into a signature — bold, intentional, and refined — and eventually into a full-time career.
            </Bio>
            <Bio>
              A stylist by title, but a storyteller by instinct, Enrique’s work has taken him from sold-out arenas to fashion capitals across the globe. He is a perfectionist in the details and a trusted visionary for talent seeking clarity in how they present themselves to the world. He is currently the lead stylist for <strong>WILL.I.AM</strong>, founding member of the Black Eyed Peas.
            </Bio>
          </TextColumn>
        </Content>
      </Container>
    </Section>
  );
};

export default AboutEnrique;
const Section = styled.section`
  background-color: #f8f8f8;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  gap: 2rem;
  align-items: center; // 👈 center both image and text vertically

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;


const ImageColumn = styled.div`
  width: 100%;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #555;
  font-weight: 400;
`;

const Bio = styled.p`
  font-family: var(--font-inter);
  font-size: 1rem;
  color: #444;
  line-height: 1.75;
`;
