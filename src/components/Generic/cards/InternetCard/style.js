import { styled } from 'styled-components';

export const InternetDiv = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  background-color: var(--card-color);
  border-bottom: ${({ $fullCard }) =>
    !$fullCard && '1px solid var(--border-color)'};
  border-radius: ${({ $fullCard }) => $fullCard && '12px'};
  border: ${({ $fullCard }) => $fullCard && '1px solid var(--border-color)'};
  gap: 8px;
  padding: ${({ $fullCard }) => ($fullCard ? '24px 15px' : '0 0 8px 0')};
  box-shadow: ${({ $fullCard }) =>
    $fullCard && '0px 0px 20px 0px rgba(0, 0, 0, 0.07)'};
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
