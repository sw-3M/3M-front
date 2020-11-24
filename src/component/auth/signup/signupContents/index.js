import React, { useState } from "react";
import client from "../../../../api";
import urls from "../../../../api/urls";
import {
  Background,
  Container,
  SingupFrom,
  InputLabel,
  SingupButton,
} from "./style";
import background from "../../../../image/signupContainer.png";

const Signup = () => {
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [phone, setPhone] = useState();
  const [kakao, setKakao] = useState();
  const [facebook, setFaceBook] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("email", email);
    data.append("username", userName);
    data.append("phone", phone);
    data.append("password", password);
    if (kakao) data.append("kakao", kakao);
    if (facebook) data.append("facebook", facebook);

    client.post(urls.SIGNUP, data).then(console.log).catch(console.log);
  };

  return (
    <Background>
      <Container src={background} />
      <SingupFrom>
        <InputLabel
          className="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel
          className="useName"
          type="text"
          placeholder="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputLabel
          className="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputLabel
          className="phone"
          type="tel"
          placeholder="phoneNum"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputLabel
          className="kakao"
          type="text"
          placeholder="kakao Id"
          value={kakao}
          onChange={(e) => setKakao(e.target.value)}
        />
        <InputLabel
          className="facebook"
          type="text"
          placeholder="facebook"
          value={facebook}
          onChange={(e) => setFaceBook(e.target.value)}
        />
      </SingupFrom>
      <SingupButton type="submit" onClick={onSubmit}>
        Sing in
      </SingupButton>
    </Background>
  );
};

export default Signup;
