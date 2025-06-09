'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo href="/">ENRIQUE MELENDEZ</Logo>
        <Nav>
          <NavItem href="/clients">Clients</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>

        </Nav>
      </Inner>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background:  #F8F8F8;

  z-index: 999;
`;

const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 1rem; /* ⬅ change from just '1rem' to '1rem 1rem' */

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;



const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #555;
  text-decoration: none;
  white-space: nowrap;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const NavItem = styled(Link)`
  font-family: var(--font-inter);
  font-weight: 450;
  font-size: 0.75rem; /* 👈 smaller and cleaner */
  color: #555;
  text-decoration: none;
  position: relative;
  transition: opacity 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.06em;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 1px;
    width: 0;
    background-color: #555;
    transition: width 0.25s ease;
  }

  &:hover {
    opacity: 0.85;
  }

  &:hover::after {
    width: 100%;
  }
`;

