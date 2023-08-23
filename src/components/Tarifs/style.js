import styled from "styled-components";

const Container = styled.div`
  width: 343px;
  height: 261px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px;
  gap: 10px;
  margin-top: 10px;
  margin: 14px 20px 14px 20px;
  margin-left: 40px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
`;

export const Titletext = styled.div`
  width: 313px;
  border: 1px solid #f6f6f6;
  margin: 14px 15px 14px 15px;
  color: var(--ussd-color);
  font-size: 20px;
  font-weight: 400;
  font-family: Okta Nueu;
  border-radius: 12px;
`;

Titletext.Title = styled.div`
  border: 1px solid #f6f6f6;
  margin: 14px 15px 14px 15px;
  font-size: 15px;
  font-weight: 400;
  font-family: Okta Nueu;
  border-radius: 12px;
`;

export default Container;
