import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { Content } from "./Styled";

const School = () => {
  let pathname = window.location.pathname;
  console.log("pathname", pathname);
  const [school, setSchool] = useState(pathname.substr(8, 10));
  return (
    <>
      <Header></Header>
      <Content>
        <Link to="/fake">
          <div className='info'></div>
        </Link>
      </Content>
    </>
  );
};

export default School;
