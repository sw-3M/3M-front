import styled from "styled-components";
import background from "../../../img/background.png";
import gsm from "../../../img/gsm.png";
import dsm from "../../../img/dsm.png";
import dgsm from "../../../img/dgsm.png";
import { Link } from "react-router-dom";

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
`;

const MainHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  .left {
    width: 33%;
    height: fit-content;
  }
  .center {
    width: 33%;
    height: fit-content;
    display: flex;
    justify-content: center;
    .logo {
      width: 240px;
      height: 150px;
    }
  }
  .right {
    width: 33%;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    .test {
      width: 205px;
      height: 80px;
    }
    .btnBox {
      width: 100px;
      height: 40px;
      border-radius: 50px;
      background-color: #ffffff;
      button {
        width: 100px;
        height: 40px;
        border: 0px solid;
        font-size: 20px;
        font-weight: bold;
        background: linear-gradient(to right, #51adcf, #3d59ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

const MainContent = styled.div`
  width: 100%;
  height: -webkit-fill-available;
  display: flex;
  justify-content: center;
  .container {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .choiceBox {
      width: 29%;
      height: 80%;
      background-color: #ffffff;
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .schoolBox {
        width: 230px;
        height: 230px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .logoBox {
          width: 230px;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        .gsmLogo {
          width: 230px;
          height: 90px;
        }
        .dsmLogo {
          width: 200px;
          height: 200px;
        }
        .dgsmLogo {
          width: 200px;
          height: 180px;
        }
      }
      span {
        font-size: 24px;
        font-weight: bold;
      }
      button {
        width: 200px;
        height: 50px;
        background-color: white;
        border-radius: 25px;
        border: 0px solid;
        font-size: 20px;
        font-weight: bold;
        color: #51adcf;
      }
    }
    .gsm {
      background-image: url(${gsm});
      background-size: cover;
    }
    .dsm {
      background-image: url(${dsm});
      background-size: cover;
    }
    .dgsm {
      background-image: url(${dgsm});
      background-size: cover;
    }
  }
`;
const ToLogin = styled(Link)``;
export { MainWrapper, MainHeader, MainContent };
