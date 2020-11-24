import React, { useState } from "react";
import "./style.scss";
import client from "../../../../api";
import urls from "../../../../api/urls";

const Signup = () => {
  const [file, setFile] = useState();
  const [fileResult, setFileResult] = useState();
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
    if (file) data.append("image", file);

    client.post(urls.SIGNUP, data).then(console.log).catch(console.log);
  };

  const uploadImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    setFile(e.target.files[0]);
    reader.onload = () => {
      setFileResult(reader.result);
    };

    console.log(file);
  };

  return (
    <form>
      <img src={fileResult} style={{ width: "30px", height: "30px" }} />
      <input type="file" accept="image/*" files={file} onChange={uploadImage} />
      <input
        className="email"
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="useName"
        type="text"
        placeholder="name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="phone"
        type="tel"
        placeholder="phoneNum"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="kakao"
        type="text"
        placeholder="kakao Id"
        value={kakao}
        onChange={(e) => setKakao(e.target.value)}
      />
      <input
        className="facebook"
        type="text"
        placeholder="facebook"
        value={facebook}
        onChange={(e) => setFaceBook(e.target.value)}
      />
      <button type="submit" onClick={onSubmit}>
        로그인
      </button>
    </form>
  );
};

export default Signup;
