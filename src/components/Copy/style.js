import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  border: 1px solid --border-color;
  border-radius: 12px;
  flex-direction: column;
  padding: 18px 14px;
  gap: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

export const TarifCode = styled.div`
  color: var(--ussd-color);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TarifWrite = styled.div`
  color: #333;
  font-family: Okta Neue, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

