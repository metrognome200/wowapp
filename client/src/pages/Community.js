import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUsers, FaComments, FaCalendar, FaUserPlus } from 'react-icons/fa';

const CommunityContainer = styled.div`
  padding: 2rem 0;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const CommunityCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

const JoinButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-2px);
  }
`;

const EventsSection = styled.section`
  margin-top: 4rem;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const EventCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const EventContent = styled.div`
  padding: 1.5rem;
`;

const EventTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const EventDate = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const EventDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Community = () => {
  const communityFeatures = [
    {
      icon: <FaUsers />,
      title: 'Guild Finder',
      description: 'Find the perfect guild for your playstyle and schedule.',
      buttonText: 'Find Guild'
    },
    {
      icon: <FaComments />,
      title: 'Forums',
      description: 'Join discussions about game mechanics, strategies, and more.',
      buttonText: 'Join Discussion'
    },
    {
      icon: <FaCalendar />,
      title: 'Events',
      description: 'Participate in community events and tournaments.',
      buttonText: 'View Events'
    },
    {
      icon: <FaUserPlus />,
      title: 'Recruitment',
      description: 'Find players for your raid team or guild.',
      buttonText: 'Recruit Players'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Weekly Raid Night',
      date: 'Every Friday, 8:00 PM EST',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Join our weekly raid night for epic boss battles and great loot!'
    },
    {
      id: 2,
      title: 'PvP Tournament',
      date: 'March 20, 2024, 2:00 PM EST',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Compete in our monthly PvP tournament for glory and rewards!'
    }
  ];

  return (
    <CommunityContainer>
      <PageTitle>Community</PageTitle>

      <CommunityGrid>
        {communityFeatures.map((feature, index) => (
          <CommunityCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <CardIcon>{feature.icon}</CardIcon>
            <CardTitle>{feature.title}</CardTitle>
            <CardText>{feature.description}</CardText>
            <JoinButton>{feature.buttonText}</JoinButton>
          </CommunityCard>
        ))}
      </CommunityGrid>

      <EventsSection>
        <SectionTitle>Upcoming Events</SectionTitle>
        <EventsGrid>
          {upcomingEvents.map(event => (
            <EventCard
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <EventImage src={event.image} alt={event.title} />
              <EventContent>
                <EventTitle>{event.title}</EventTitle>
                <EventDate>
                  <FaCalendar />
                  {event.date}
                </EventDate>
                <EventDescription>{event.description}</EventDescription>
                <JoinButton>Join Event</JoinButton>
              </EventContent>
            </EventCard>
          ))}
        </EventsGrid>
      </EventsSection>
    </CommunityContainer>
  );
};

export default Community; 