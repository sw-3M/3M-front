import React, { useState } from "react";
import { HeaderWrapper, LogoBox, IconBox } from "./Styled";
import logo from "../../../img/logo_1.png";
import school from "../../../img/university.png";
import club from "../../../img/poker-chip.png";
import QnA from "../../../img/qa.png";
import post from "../../../img/bamboo.png";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  let pathname = window.location.pathname;
  console.log('pathname', pathname);
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
          <span>동아리 소개</span>
        </div>
        <div className='QnA'>
          <img src={QnA} />
          <span>Q&A</span>
        </div>
        <div className='post'>
          <img src={post} />
          <span>대나무 숲</span>
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
