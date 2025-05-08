import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 4rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 1rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const CTAButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-2px);
  }
`;

const FeaturedSection = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2.5rem;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const FeaturedCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Home = () => {
  const featuredContent = [
    {
      title: 'Latest Patch Notes',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      text: 'Check out the latest updates and changes in the game.',
      link: '/patch-notes'
    },
    {
      title: 'Community Events',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      text: 'Join our community events and meet fellow players.',
      link: '/events'
    },
    {
      title: 'Character Guides',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      text: 'Learn how to optimize your character builds and strategies.',
      link: '/guides'
    }
  ];

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to WoW Portal
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your ultimate destination for World of Warcraft news, community, and character management
          </HeroSubtitle>
          <CTAButton
            as={Link}
            to="/characters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Featured Content</SectionTitle>
        <FeaturedGrid>
          {featuredContent.map((item, index) => (
            <FeaturedCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <CardImage src={item.image} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.text}</CardText>
                <CTAButton as={Link} to={item.link}>
                  Learn More
                </CTAButton>
              </CardContent>
            </FeaturedCard>
          ))}
        </FeaturedGrid>
      </FeaturedSection>
    </>
  );
};

export default Home; 