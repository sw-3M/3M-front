import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Content } from "./Styled";

const QnA = () => {
  let pathname = window.location.pathname; 
  console.log('pathname', pathname);
  const [school, setSchool] = useState(pathname.substr(8,10));
  return (
    <>
      <Header></Header>
      <Content></Content>
    </>
  );
};

export default QnA;
