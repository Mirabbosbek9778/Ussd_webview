import { styled } from "styled-components";

export const InternetDiv = styled.div`
display:flex;
align-items: start;
flex-direction: column;
background-color: var(--card-color);
border: 1px solid var(--border-color);
`
export const CardDiv = styled.div`
margin: 0 16px;
background-color: var(--card-color);
border-radius: 12px;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
`

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
padding: 15px 75px;
margin: auto;
width: 90%;
`