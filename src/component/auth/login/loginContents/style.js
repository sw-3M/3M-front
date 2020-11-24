import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 998;
`;

export const LoginContainer = styled.img`
  font-family: "NanumSquare", sans-serif !important;
  font-style: "NanumSquare";
  position: absolute;
  background-size: 600px;
  position: absolute;
  width: 600px;
  height: 600px;
  z-index: 999;
  object-fit: contain;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5% 31%;
`;

export const LoginForm = styled.form`
  position: relative;
  top: 290px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputLabel = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 50px;

  border: none;
  border-bottom: 2px solid #868686;
  padding: 1px 5px;

  font-size: 20px;
  margin: 10px 0;

  &:focus {
    outline: 2px solid #64a5d6;
    border: none;
  }
`;

export const LoginButton = styled.button`
  margin-top: 50px;

  width: 200px;
  height: 70px;

  outline: none;
  border: 2px solid #64a5d6;
  background-color: white;
  border-radius: 65px;

  font-size: 30px;

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
