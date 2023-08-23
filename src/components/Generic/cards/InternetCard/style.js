import { styled } from 'styled-components';

export const InternetDiv = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  background-color: var(--card-color);
  border-bottom: 1px solid var(--border-color);
  gap: 8px;
  padding-bottom: 8px;
`;
export const CardDiv = styled.div`
  background-color: var(--card-color);
  padding: 24px 15px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MainBtn = styled.button`
  display: flex;
  padding: 15px 14px;
  justify-content: center;
  text-align: center;
  align-self: stretch;
  border-radius: 12px;
  background: rgba(0, 115, 255, 0.14);
  font-size: var(--text-size);
  color: var(--ussd-color);
  font-weight: 500;
`;
