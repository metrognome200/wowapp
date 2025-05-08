import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter } from 'react-icons/fa';

const CharactersContainer = styled.div`
  padding: 2rem 0;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const SearchBar = styled.div`
  max-width: 600px;
  margin: 0 auto 2rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 3rem 1rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.secondary};
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button`
  background-color: ${({ active, theme }) => active ? theme.colors.secondary : theme.colors.primary};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text};
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CharactersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const CharacterCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CharacterInfo = styled.div`
  padding: 1.5rem;
`;

const CharacterName = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const CharacterDetails = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CharacterDetail = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const CharacterDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['All', 'Alliance', 'Horde', 'DPS', 'Tank', 'Healer'];

  const characters = [
    {
      id: 1,
      name: 'Thrall',
      faction: 'Horde',
      class: 'Shaman',
      role: 'DPS',
      level: 60,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Former Warchief of the Horde and a powerful shaman.'
    },
    {
      id: 2,
      name: 'Jaina Proudmoore',
      faction: 'Alliance',
      class: 'Mage',
      role: 'DPS',
      level: 60,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Leader of Kul Tiras and a powerful archmage.'
    },
    // Add more characters as needed
  ];

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || 
      character.faction.toLowerCase() === activeFilter.toLowerCase() ||
      character.role.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <CharactersContainer>
      <PageTitle>Characters</PageTitle>
      
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon />
      </SearchBar>

      <FilterSection>
        {filters.map(filter => (
          <FilterButton
            key={filter}
            active={activeFilter === filter.toLowerCase()}
            onClick={() => setActiveFilter(filter.toLowerCase())}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterSection>

      <CharactersGrid>
        {filteredCharacters.map(character => (
          <CharacterCard
            key={character.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <CharacterImage src={character.image} alt={character.name} />
            <CharacterInfo>
              <CharacterName>{character.name}</CharacterName>
              <CharacterDetails>
                <CharacterDetail>{character.faction}</CharacterDetail>
                <CharacterDetail>{character.class}</CharacterDetail>
                <CharacterDetail>Level {character.level}</CharacterDetail>
              </CharacterDetails>
              <CharacterDescription>{character.description}</CharacterDescription>
            </CharacterInfo>
          </CharacterCard>
        ))}
      </CharactersGrid>
    </CharactersContainer>
  );
};

export default Characters; 