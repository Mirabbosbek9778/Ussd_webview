import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  border: 1px solid red gap;
  margin-top: 16px;
  margin: 16px 16px 16px 16px;
  border-radius: 12px;
  height: 95px;
  flex-direction: column;
  gap: 13px;
`;

export const TarifCode = styled.div`
  color: var(--ussd-color, #0073ff);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TarifWrite = styled.div`
  color: var(--text-color, #333);
  font-family: Okta Neue, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 14px;
  padding-top: 18px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 14px 0px 14px;
`;
