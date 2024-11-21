import { useState } from 'react';
import styled, { css } from 'styled-components';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  let dropdownTimeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = (item: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setActiveItem(null);
    }, 200); 
  };

  return (
    <NavContainer>
      <NavMenu>
        <NavItem
          onMouseEnter={() => handleMouseEnter('home')}
          onMouseLeave={handleMouseLeave}
        >
          Home
          <DropdownMenu isActive={activeItem === 'home'}>
            <DropdownText>About</DropdownText>
            <DropdownText>Stats</DropdownText>
            <DropdownText>FAQ</DropdownText>
          </DropdownMenu>
        </NavItem>

        <NavItem
          onMouseEnter={() => handleMouseEnter('products')}
          onMouseLeave={handleMouseLeave}
        >
          Commands
          <DropdownMenu isActive={activeItem === 'products'}>
            <DropdownText>Moderation</DropdownText>
            <DropdownText>Utility</DropdownText>
            <DropdownText>Music</DropdownText>
            <DropdownText>Leveling</DropdownText>
          </DropdownMenu>
        </NavItem>

        <NavItem
          onMouseEnter={() => handleMouseEnter('pricing')}
          onMouseLeave={handleMouseLeave}
        >
          Contact
          <DropdownMenu isActive={activeItem === 'pricing'}>
            <DropdownText>Standard</DropdownText>
            <DropdownText>Premium</DropdownText>
            <DropdownText>Enterprise</DropdownText>
          </DropdownMenu>
        </NavItem>
      </NavMenu>
    </NavContainer>
  );
};

// Styled components
const NavContainer = styled.nav`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 1000;
  width: 100%;
  pointer-events: none; /* Avoid blocking interactions with underlying content */
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 50px;
  background-color: #fff;
  padding: 2px 10px;
  border-radius: 40px;
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.2);
  list-style: none;
  transition: background 0.3s ease;
  font-size: 16px;
  pointer-events: auto;
`;

const NavItem = styled.li`
  position: relative;
  color: #000;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ff00ff;
    transform: scale(1.05); /* Slight scale for a modern touch */
  }
`;

// Enhanced Dropdown menu with smoother scaling and opacity transitions
const DropdownMenu = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: scale(0.95);
  visibility: hidden;
  transition: opacity 0.35s ease, transform 0.35s ease, visibility 0.35s ease;

  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    `}
`;

const DropdownText = styled.p`
  color: #000;
  font-size: 16px;
  padding: 8px 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0099;
  }
`;

export default Navbar;
