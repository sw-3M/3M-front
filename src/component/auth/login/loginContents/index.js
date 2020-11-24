import React, { useState } from "react";
import "./style.js";
import client from "../../../../api";
import urls from "../../../../api/urls";
import bg from "../../../../image/background.png";
import loginContainer from "../../../../image/loginContainer.png";
import {
  Background,
  LoginContainer,
  LoginForm,
  Overlay,
  InputLabel,
  LoginButton,
  ToSingup,
} from "./style";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    client
      .post(urls.LOGIN, data)
      .then((res) => localStorage.setItem("token", res.data.token))
      .catch(console.log);
  };

  return (
    <>
      <Background src={bg} />
      <Overlay />
      <LoginContainer src={loginContainer}>
        <LoginForm className="container nanumsquare">
          <InputLabel
            className="email"
            type="text"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLabel
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton onClick={onSubmit}>LOGIN</LoginButton>
          <ToSingup to="/signup">
            아직 회원이 아니신가요? 회원 가입 하러가기
          </ToSingup>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default Login;
