import styled from 'styled-components';

export type CardPadding = 'sm' | 'md' | 'lg';

export type StyledCardProps = {
  $padding?: CardPadding;
  $elevated?: boolean;
};

export const StyledCard = styled.div<StyledCardProps>`
  background: var(--color-white);
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ $elevated, theme }) =>
    $elevated ? theme.shadows.medium : theme.shadows.soft};
  padding: ${({ $padding = 'md' }) => {
    switch ($padding) {
      case 'sm':
        return '1rem';
      case 'lg':
        return '1.5rem';
      default:
        return '1.25rem';
    }
  }};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ $elevated, theme }) =>
      $elevated ? theme.shadows.glow : theme.shadows.medium};
  }
`;
