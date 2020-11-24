import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Content } from "./Styled";

const Club = () => {
  let pathname = window.location.pathname; 
  console.log('pathname', pathname);
  const [school, setSchool] = useState(pathname.substr(8,10));
  return (
    <>
      <Header></Header>
      <Content>
        <button>새 동아리 등록</button>
      </Content>
    </>
  );
};

export default Club;
