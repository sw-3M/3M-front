import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

const School = () => {
  let pathname = window.location.pathname; 
  console.log('pathname', pathname);
  const [school, setSchool] = useState(pathname.substr(8,10));
  return (
    <>
      <Header></Header>
      hello {school}
    </>
  );
};

export default School;
