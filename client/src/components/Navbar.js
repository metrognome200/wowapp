import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">WoW Portal</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/community">Community</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContainer>

      <MobileMenu
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween' }}
      >
        <NavLink to="/" onClick={toggleMobileMenu}>Home</NavLink>
        <NavLink to="/characters" onClick={toggleMobileMenu}>Characters</NavLink>
        <NavLink to="/news" onClick={toggleMobileMenu}>News</NavLink>
        <NavLink to="/community" onClick={toggleMobileMenu}>Community</NavLink>
        <NavLink to="/profile" onClick={toggleMobileMenu}>Profile</NavLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar; 