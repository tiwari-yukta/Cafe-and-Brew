import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-white);
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  min-width: 100px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.md};

  @media (max-width: 600px) {
    width: 100%;
    min-width: 0;
    height: 160px;
  }
`;

export const Details = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Name = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: var(--color-text-primary);
  text-decoration: none;
  display: block;
  margin-bottom: 0.25rem;
  word-break: break-word;

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Price = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: var(--color-text-primary);
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;

    & > * {
      flex: 1;
      min-width: 0;
    }
  }
`;
