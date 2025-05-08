import React from 'react';
import styled from 'styled-components';
import { FaDiscord, FaTwitter, FaTwitch, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About WoW Portal</h3>
          <p>Your ultimate destination for World of Warcraft news, community, and character management.</p>
          <SocialLinks>
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
              <FaTwitch />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/characters">Characters</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Resources</h3>
          <ul>
            <li><a href="/guides">Game Guides</a></li>
            <li><a href="/patch-notes">Patch Notes</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} WoW Portal. All rights reserved.</p>
        <p>World of Warcraft is a registered trademark of Blizzard Entertainment.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 