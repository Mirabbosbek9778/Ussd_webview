import styled from "styled-components";

export const TitleText = styled.div`
  color: var(--black, #000);
  font-family: Okta Neue, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Description = styled.div`
  color: var(--gray-500, #333);
  font-family: Okta Neue, sans-serif;
  height: 20vh;
  overflow: auto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 10px;
  margin: 16px;
  padding: 16px 16px 16px 16px;
  padding: 16px;
`;

export const BtnActive = styled.div`
  background-color: var(--ussd-color);
  display: flex;

  border: 1px solid red gap;
  /* margin-top: 16px; */
  margin: 16px 16px 16px 16px;
  border-radius: 12px;
  height: 55px;
  flex-direction: column;
  gap: 13px;
  padding-top: 15px;
  /* padding-left: 100px;
  padding-right: 100px; */
  color: white;
`;

export const BtnModal = styled.div`
  color: var(--text-color);
  font-family: Okta Neue, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const BtnP = styled.div`
  color: black !important;
  text-align: center;
  font-family: Okta Neue, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 10px;
`;

export const Cancel = styled.button`
  color: #fa2d2d;
  text-align: center;
  font-family: Okta Neue, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Active = styled.button`
  color: var(--ussd-color);
  text-align: center;
  font-family: Okta Neue, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
