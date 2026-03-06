import styled from 'styled-components';

export const IconWrapper = styled.span<{ $size?: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size = 1 }) => $size}em;
`;
