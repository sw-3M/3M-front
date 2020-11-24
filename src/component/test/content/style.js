import styled,{keyframes,createGlobalStyle} from 'styled-components';
// body tag
export const Global = createGlobalStyle 
`body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    .inner {
        width: 360px;
        height: 680px;
        margin: 0 auto;
    }
}`

export const Title = styled.header`
    // title tag
    margin-top: 125px;
    .revised {
        color: rgba(0, 0, 0, 0.3);
        font-size: 17px;
        margin: 15px 0;
    }
    .question {
        font-size: 25px;
        font-weight: bolder;
    }
`

export const Content = styled.section`
    margin: 40px 0;
    .text {
        font-size: 20px;
        line-height: 100px;
        padding: 0 10px;
        color: rgba(0, 0, 0, 0.45);
    }
    .box {
        width: 360px;
        height: 100px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        margin: 10px 0;
    }
`
export const Choice = styled.section`
    width: 150px;
    height: 20px;
    display: flex;
    .rocket {
        width: 100%;
        height: 30px;
    }
    img {
        width: 30px;
        height: 20px;
        position: absolute;
    }
    .rocket-text {
        font-size: 12.5px;
        margin-left: 30px;
        color: rgba(0, 0, 0, 0.45);
        line-height: 1px;
    }
    .counting {
        position: absolute;
        padding-left: 270px;
        margin-top: -30px;
        width: 200px;
        font-size: 13px;
    }
`

export const Footer = styled.section`
    .bar {
        width: 370px;
        height: 10px;
        margin: 5px 3px;
        border: 1px solid rgba(0, 0, 0, 0.45);
        border-radius: 100px;
    }
`
export const GageBar = styled.div`
    width: ${pros=>pros.width===0?74:(pros.width+1)*74}px;
    height: 10px;
    margin: -17px 3px;
    border: 1px solid rgba(0, 0, 0, 0.45);
    border-radius: 100px;
    position: flex;
    background-color: rgba(0, 0, 0, 0.3);
    transition-duration: 1s;
` 
const Ani =({x}) =>keyframes`
    1% {
        width: 125px;
    }
    20% {
        width: 187.5px;
    }
    40% {
        width: 250px;
    }
    60% {
        width: 312.5px;
    }
    80% {
        width: 370px;
    }
`