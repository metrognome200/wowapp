import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

const NewsContainer = styled.div`
  padding: 2rem 0;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const Sidebar = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: -1;
  }
`;

const ArticleCard = styled(motion.article)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const ArticleContent = styled.div`
  padding: 2rem;
`;

const ArticleTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ArticleText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMoreButton = styled.button`
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

const SidebarSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const SidebarTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CategoryLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const News = () => {
  const articles = [
    {
      id: 1,
      title: 'New Raid Tier Announced: The Eternal Palace',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      date: '2024-03-15',
      author: 'Blizzard Entertainment',
      category: 'Raids',
      content: 'Blizzard has announced the next major raid tier, The Eternal Palace, featuring challenging encounters and powerful rewards...'
    },
    {
      id: 2,
      title: 'Class Balance Changes in Latest Patch',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      date: '2024-03-14',
      author: 'Game Design Team',
      category: 'Updates',
      content: 'The latest patch brings significant changes to class balance, with improvements to underperforming specs and adjustments to overpowered abilities...'
    }
  ];

  const categories = [
    'News',
    'Raids',
    'PvP',
    'Updates',
    'Community',
    'Events',
    'Guides',
    'Lore'
  ];

  return (
    <NewsContainer>
      <PageTitle>Latest News</PageTitle>

      <NewsGrid>
        <MainContent>
          {articles.map(article => (
            <ArticleCard
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArticleImage src={article.image} alt={article.title} />
              <ArticleContent>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleMeta>
                  <MetaItem>
                    <FaCalendarAlt />
                    {article.date}
                  </MetaItem>
                  <MetaItem>
                    <FaUser />
                    {article.author}
                  </MetaItem>
                  <MetaItem>
                    <FaTag />
                    {article.category}
                  </MetaItem>
                </ArticleMeta>
                <ArticleText>{article.content}</ArticleText>
                <ReadMoreButton>Read More</ReadMoreButton>
              </ArticleContent>
            </ArticleCard>
          ))}
        </MainContent>

        <Sidebar>
          <SidebarSection>
            <SidebarTitle>Categories</SidebarTitle>
            <CategoryList>
              {categories.map(category => (
                <CategoryItem key={category}>
                  <CategoryLink href="#">
                    <FaTag />
                    {category}
                  </CategoryLink>
                </CategoryItem>
              ))}
            </CategoryList>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Recent Posts</SidebarTitle>
            <CategoryList>
              {articles.map(article => (
                <CategoryItem key={article.id}>
                  <CategoryLink href="#">
                    {article.title}
                  </CategoryLink>
                </CategoryItem>
              ))}
            </CategoryList>
          </SidebarSection>
        </Sidebar>
      </NewsGrid>
    </NewsContainer>
  );
};

export default News; 