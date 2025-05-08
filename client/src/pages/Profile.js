import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa';

const ProfileContainer = styled.div`
  padding: 2rem 0;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 2rem;
  height: fit-content;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserName = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-bottom: 0.5rem;
`;

const UserRole = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.9rem;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 1rem;
`;

const MenuLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.8rem;
  background: none;
  border: none;
  color: ${({ theme, active }) => active ? theme.colors.secondary : theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;

  &:hover {
    background-color: rgba(200, 170, 110, 0.1);
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MainContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 2rem;
`;

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const SaveButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-2px);
  }
`;

const Profile = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [formData, setFormData] = useState({
    username: 'Thrall',
    email: 'thrall@wow.com',
    bio: 'Former Warchief of the Horde. Shaman of the Earthen Ring.',
    location: 'Orgrimmar',
    discord: 'Thrall#1234'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <ProfileContainer>
      <PageTitle>Profile</PageTitle>

      <ProfileGrid>
        <Sidebar>
          <ProfileImage>
            <Image src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Profile" />
          </ProfileImage>
          <UserName>{formData.username}</UserName>
          <UserRole>Shaman • Horde</UserRole>

          <MenuList>
            <MenuItem>
              <MenuLink
                active={activeSection === 'profile'}
                onClick={() => setActiveSection('profile')}
              >
                <FaUser />
                Profile
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                active={activeSection === 'settings'}
                onClick={() => setActiveSection('settings')}
              >
                <FaCog />
                Settings
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                active={activeSection === 'logout'}
                onClick={() => setActiveSection('logout')}
              >
                <FaSignOutAlt />
                Logout
              </MenuLink>
            </MenuItem>
          </MenuList>
        </Sidebar>

        <MainContent>
          <SectionTitle>Edit Profile</SectionTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Bio</Label>
              <TextArea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Discord</Label>
              <Input
                type="text"
                name="discord"
                value={formData.discord}
                onChange={handleInputChange}
              />
            </FormGroup>

            <SaveButton type="submit">
              Save Changes
            </SaveButton>
          </Form>
        </MainContent>
      </ProfileGrid>
    </ProfileContainer>
  );
};

export default Profile; 