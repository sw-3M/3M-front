import React from "react";
import { Background, Overlay } from "./style";
import background from "../../../../img/background.png";
const Anonymous = () => {
  return (
    <>
      <Background src={background} />
      <Overlay />
    </>
  );
};

export default Anonymous;
