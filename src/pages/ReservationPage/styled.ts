import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const SubtitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const FormCard = styled.div`
  background: var(--color-white);
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;
