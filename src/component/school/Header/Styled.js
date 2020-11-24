import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 2px rgba(0,0,0,0.16);
  .iconBox {
    width: 50%;
    height: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
    img {
      width: 70px;
      height: 70px;
    }
    .school,
    .club,
    .QnA,
    .post {
      width: 100px;
      height: -webkit-fill-available;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .btnBox {
    width: 120px;
    height: -webkit-fill-available;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .loginBtn {
    width: 100px;
    height: 50px;
    background-color: #ffffff;
    border: 1px solid;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
  }
  .joinBtn {
    width: 120px;
    height: 50px;
    background-color: #ffffff;
    border: 1px solid;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const LogoBox = styled.div`
  width: 180px;
  height: 120px;
  img {
    width: 180px;
    height: 120px;
  }
`;

export const IconBox = styled.div`
  width: 50%;
  height: -webkit-fill-available;
  display: flex;
  justify-content: space-between;
  img {
    width: 70px;
    height: 70px;
  }
  .school,
  .club,
  .QnA,
  .post {
    width: 100px;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  a{
      text-decoration: none;
      color: #000000;
    }
`;
