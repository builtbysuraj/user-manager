import styled from "styled-components";

export const DisplayUser = styled.div`
display: flex;
align-items: center;
width: 100%;
margin-top: 7px;
font-size: 1.4rem;
gap: 15px;
padding: 10px;
color: black;
background-color: wheat;
border-radius: 3px;
cursor: pointer;
transition: transform 0.4s;

&:hover{
    transform: translateY(-5px) scale(1.01);
  }
p{
  font-weight: bold;
}
`
