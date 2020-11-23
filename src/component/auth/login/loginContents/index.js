import React, { useState } from "react";
import client from "../../../../api";

const Login = () => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      password: password,
    };
  };

  return <div></div>;
};

export default Login;
