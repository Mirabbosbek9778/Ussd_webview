import { styled } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 700px;
  min-width: 375px;
  height: 89px;
  background-color: var(--ussd-color);
  display: flex;
  padding: 0 16px 10px 16px;
  align-items: flex-end;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 10;
`;

export const TextItem = styled.p`
  font-family: Okta-Neue, sans-serif;
  font-size: 16px;
  color: var(--card-color);
`;
