import styled from 'styled-components';

export const Container = styled.div`
  /* height: 261px; */
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px;
  gap: 10px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
  padding: 14px 15px;
  border: 1px solid var(--border-color);
  background: var(--background-color);
`;

export const Titletext = styled.p`
  color: var(--ussd-color);
  font-family: Okta-Neue, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

Titletext.Title = styled.div`
  font-size: 15px;
  font-weight: 400;
  font-family: Okta Nueu, sans-serif;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Text = styled.div`
  color: ${({ $detail }) => ($detail ? 'white' : 'var(--text-value-color)')};
  background-color: ${({ $detail }) => $detail && 'var(--ussd-color)'};
  border-radius: ${({ $detail }) => $detail && '50px'};
  padding: ${({ $detail }) => $detail && '4px 10px'};
  font-family: Okta Neue, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
`;
