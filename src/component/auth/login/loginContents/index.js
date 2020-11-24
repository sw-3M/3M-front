import React, { useState } from "react";
import "./style.scss";
import client from "../../../../api";
import urls from "../../../../api/urls";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    client.post(urls.LOGIN, data).then(console.log).catch(console.log);
  };

  return (
    <form className="container nanumsquare">
      <input
        className="email"
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="PASSWORD"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onSubmit}>로그인</button>
    </form>
  );
};

export default Login;
