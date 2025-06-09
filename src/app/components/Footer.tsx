'use client';

import styled from 'styled-components';
import Image from 'next/image';


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <TopLine>Let the work speak for itself.</TopLine>

      <Row>
      <CTA
  href="https://instagram.com/mrenriquemelendez"
  target="_blank"
  rel="noopener noreferrer"
>
  Follow the journey
  <InstagramIcon src="/instagram.svg" alt="Instagram" width={16} height={16} />
</CTA>


        <Copyright>Enrique Melendez © {year}</Copyright>
      </Row>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.footer`
  padding: 4rem 2rem 3rem;
  background: #f8f8f8;
  color: #111;
  text-align: center;
`;
const InstagramIcon = styled(Image)`
  width: 1rem;
  height: 1rem;
  object-fit: contain;
  opacity: 0.9;
`;


const TopLine = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.04em;
  margin-bottom: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const CTA = styled.a`
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const Copyright = styled.p`
   font-size: 0.8rem;
    text-transform: uppercase;
  font-family: var(--font-inter);
  color: #555;
`;

