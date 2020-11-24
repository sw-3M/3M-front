import React from "react";
import { MainWrapper, MainHeader, MainContent } from "./Styled";
import mainlogo from "../../img/logo_1.png";
import test from "../../img/test.png";
import gsmLogo from "../../img/gsm_logo.png";
import dsmLogo from "../../img/dsm_logo.png";
import dgsmLogo from "../../img/dgsm_logo.png";

const Main = () => {
  return (
    <MainWrapper>
      <MainHeader>
        <div className='left'></div>
        <div className='center'>
          <img src={mainlogo} className='logo'></img>
        </div>
        <div className='right'>
          <img src={test} className='test' />
          <div className='btnBox'>
            <button>Login</button>
          </div>
        </div>
      </MainHeader>
      <MainContent>
        <div className='container'>
          <div className='choiceBox gsm'>
            <div className='schoolBox'>
              <div className='logoBox'>
                <img src={gsmLogo} className='gsmLogo' />
              </div>
              <span>광주SW마이스터고</span>
            </div>
            <button>방문하기</button>
          </div>
          <div className='choiceBox dsm'>
            <div className='schoolBox'>
              <div className='logoBox'>
                <img src={dsmLogo} className='dsmLogo' />
              </div>
              <span>대덕SW마이스터고</span>
            </div>
            <button>방문하기</button>
          </div>
          <div className='choiceBox dgsm'>
            <div className='schoolBox'>
              <div className='logoBox'>
                <img src={dgsmLogo} className='dsmLogo' />
              </div>
              <span>대구SW마이스터고</span>
            </div>
            <button>방문하기</button>
          </div>
        </div>
      </MainContent>
    </MainWrapper>
  );
};

export default Main;