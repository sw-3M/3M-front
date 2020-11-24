import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { Content } from "./Styled";

const Fake = () => {
  let pathname = window.location.pathname;
  const [school, setSchool] = useState(pathname.substr(8, 10));
  return (
    <>
      <Header></Header>
      <Content>
      </Content>
    </>
  );
};

export default Fake;
