import { styled } from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 89px;
  background-color: var(--ussd-color);
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding-right: 20px;
`;

export const BoxItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 55px;
`;

export const TextItem = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  color: var(--card-color);
`;
