import React, { useState } from "react";
import { HeaderWrapper, LogoBox, IconBox } from "./Styled";
import logo from "../../../img/logo_1.png";
import school from "../../../img/university.png";
import club from "../../../img/poker-chip.png";
import QnA from "../../../img/qa.png";
import post from "../../../img/bamboo.png";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <HeaderWrapper>
      <LogoBox>
        <img src={logo} />
      </LogoBox>
      <IconBox>
        <div className='school'>
          <img src={school} />
          <span>학교소개</span>
        </div>
        <div className='club'>
          <img src={club} />
          <span>학교소개</span>
        </div>
        <div className='QnA'>
          <img src={QnA} />
          <span>학교소개</span>
        </div>
        <div className='post'>
          <img src={post} />
          <span>학교소개</span>
        </div>
      </IconBox>
      <div className="btnBox">
      {isLogin === false
        ? <button className="loginBtn">로그인</button>
        : <button className="joinBtn">로그아웃</button>}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
