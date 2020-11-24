import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div`
    header {
        width: 100%;
        height: 120px;
        background-color: rgba(0,0,0,0.05);
        position: absolute;
        z-index:1;
    }
    img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -10;
    }
    .inner {
        width: 600px;
        height: 400px;
        position:absolute;
        margin-top: 150px;
    }
    .box {
        width: 600px;
        height: 100px;
        background-color: #ffffff;
        border: 1px solid rgba(0,0,0,0.5);
        margin: 33px 120px;
    }
    span {
        text-align: center;
        line-height: 100px;
    }
    .big {
        font-size: 27px;
        font-weight: bold;
    }
    .small {
        font-size: 15px;
    }
`
export const Suport = styled.div`
    width: 500px;
    height: 600px;
    span {
        margin-left: 1090px;
        margin-top: 180px;
        font-size: 24px;
        font-weight: 100px;
        position: absolute;
        color:#000;
    }
    img {
        width: 500px;
        height: 400px;
        position: absolute;
        margin-left: 900px;
        margin-top: 230px;
    }
    .inner {
        width: 250px;
        height: 300px;
        position:absolute;
        margin-left: 1030px;
        margin-top: 300px;
    }
    .inner div {
        width: 250px;
        height: 40px;
        text-align: center;
        line-height: 40px;
    }
    .date {
        font-size: 20px;
    }
    .date span img {
        width: 24px;
        height: 24px;
        position: flex;
    }
    .lunch {
        margin-top: 15px;
        font-size:25px;
        font-weight: 500;
    }
    .food {
        font-size: 18px;
    }

`