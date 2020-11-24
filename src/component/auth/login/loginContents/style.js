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

export const LoginContainer = styled.div`
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
  font-family: "NanumSquare", sans-serif !important;
  font-style: "NanumSquare";

  background-image: url(${(props) => props.src});
  background-size: 600px;
  position: absolute;
  width: 600px;
  height: 601px;
  z-index: 999;
  object-fit: contain;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 76px;
  margin: 5% 30%;
  box-shadow: 20px -20px 5px rgba(0, 0, 0, 0.2);
`;

export const LoginForm = styled.form`
  margin-top: 110px;
  position: relative;
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
  margin-top: 20px;

  width: 200px;
  height: 70px;

  border: 2px solid #64a5d6;
  background-color: white;
  border-radius: 65px;

  font-size: 30px;

  box-sizing: border-box;

  background: linear-gradient(to right, #51adcf, #51adcf, #3d59ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ToSingup = styled(Link)`
  margin-top: 30px;
  text-decoration: none;
  color: #868686;

  &:hover {
    text-decoration: underline;
  }
`;
