import { styled } from 'styled-components';

export const Title = styled.div`
  color: ${({ color }) => (color ? 'var(--ussd-color)' : 'var(--item-color)')};
  text-align: center;
  font-family: Okta Neue, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
