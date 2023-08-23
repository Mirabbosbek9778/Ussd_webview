import styled from "styled-components";

const Container = styled.div`
  height: 261px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px;
  gap: 10px;
  margin: 0 auto;
  /* width: 90%; */
  /* margin-top: 100px; */
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
`;

export const Titletext = styled.p`
  color: var(--ussd-color, #0073ff);
  font-family: Okta Neue, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 14px 15px;
`;

Titletext.Title = styled.div`
  border: 1px solid #f6f6f6;
  margin: 14px 15px 14px 15px;
  font-size: 15px;
  font-weight: 400;
  font-family: Okta Nueu,sans-serif;
  border-radius: 12px;
`;
export const FooterText = styled.p`
  color: var(--text-color, #333);
  text-align: center;
  font-family: Okta Neue, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Box = styled.p`
  color: var(--text-color, #000);
  font-family: Okta Neue, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Icons=styled.div`
padding-left: 31px;

`

export default Container;
