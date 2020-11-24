import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #d1eaf2;
`;
export const Container = styled.img`
  position: absolute;
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
  font-family: "NanumSquare", sans-serif !important;
  font-style: "NanumSquare";

  width: 800px;
  height: 600px;
  object-fit: contain;

  margin: 5% 24%;
`;

export const SingupFrom = styled.form`
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 700px;
  height: 250px;
  margin: auto;
  margin-top: 300px;
`;

export const InputLabel = styled.input`
  box-sizing: border-box;
  padding: 3px 10px;
  margin: 0 20px;
  width: 300px;
  height: 40px;

  border: none;
  border-bottom: 1px solid #868686;
`;

export const SingupButton = styled.button`
  position: relative;
  z-index: 999;
  margin: 10px 45%;

  width: 150px;
  height: 50px;

  outline: none;
  border: 2px solid #64a5d6;
  background-color: white;
  border-radius: 65px;

  font-size: 20px;

  box-sizing: border-box;

  background: linear-gradient(to right, #51adcf, #51adcf, #3d59ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:active {
    background: white;
    color: white;
    background-color: #51adcf;
  }
`;

export const ToSingup = styled(Link)`
  margin-top: 30px;
  text-decoration: none;
  color: #868686;

  &:hover {
    text-decoration: underline;
  }
`;
