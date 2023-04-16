import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
html{
  font-size: 62.5%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 }
 body{
  background-color: #111827;
  color: white;
 }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;

}
.Toastify__toast-body {
    font-size: 15px;
  }
`
