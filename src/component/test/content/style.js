import styled,{keyframes,createGlobalStyle} from 'styled-components';
// body tag
export const Global = createGlobalStyle 
`body {
    width: 100%
    height: 100%
    margin: 0 auto;
    .inner {
        width: 360px;
        height: 680px;
        margin: 0 auto;
        padding-top: 150px;
    }
}
`
export const AllPage = styled.section`
    display:block;
`
export const FristPage = styled.section`
    .box{
        width: 558px;
        height: 600px;
        position: absolute;
        background-color: #ffffff;
        z-index: -1;
        border-radius: 40px;
        margin-left: 700px;
        margin-top: 150px;
    } 
`
export const Frist_text = styled.div`
    display: block;
    img {
        width:269px;
        height:150px;
        margin-left: 830px;
        margin-top: 200px;
    }
    div {
        font-size: 22px;
    }
    .bold {
        font-size: 30px;
        font-weight: bold;
    }
    span {
        color: #51ADCF;
    }
    .text {
        margin-left: 820px;
        margin-top: 40px;
    }
    .start {
        width: 380px;
        height: 100px;
        background-color: #51ADCF;
        margin-left: 800px;
        margin-top: 30px;
    }
    .text1 {
        font-size: 30px;
        font-weight: bold;
        line-height: 100px;
        color: #ffffff; 
        text-align: center;
        margin-left: 130px;
    }
    
`
export const Footer = styled.section`
    .bar {
        width: 650px;
        height: 30px;
        border: 2px solid rgba(0, 0, 0, 0.45);
        border-radius: 100px;
        position: absolute;
        margin-left:660px;
        margin-top: 85px;
        z-index:2;
    }
`
export const GageBar = styled.div`
    width: ${pros=>pros.width===0?0:(pros.width)*130}px;
    height: 30px;
    border-radius: 100px;
    position: absolute;
    background-color: #ffffff;
    transition-duration: 1s;
    margin-left:660px;
    margin-top: 85px;
` 

export const Bycicle = styled.div`
    background-image: url('./img/bycicle.png');
    img {
        margin-left: ${pros=>pros.width===0?620:(pros.width-1)*130+750}px;
        width: 72px;
        height: 72px;
        position: absolute;
        transition-duration: 1s;
        margin-top: 45px;
    }
`

export const Background = styled.div`
    img {
        margin-left: -${pros=>pros.width===0?0:(pros.width)*1800}px;
        z-index: -1;
        position: absolute;
        transition-duration: 1s;
        height: 100%;
    }
`
export const Title = styled.header`
    // title tag
    padding-top: 50px;
    .revised {
        color: #EEB17C;
        font-size: 52px;
        font-weight:bold;
        padding-bottom: 50px;
        margin-left: 170px
    }
    .question {
        padding-bottom: 50px;
        font-size: 25px;
        font-weight: bolder;
    }
`

export const Content = styled.section`
    width:400px;
    height:250px;
    position: absolute;
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
        background-color: #ffffff;
        border-radius: 5px;
        margin: 10px 0;
    }
    .gage:hover {
        transition:0.3s;
        background-color: rgba(254, 178, 178, 0.6);
    }
    #0, #1 {
        font-weight: bold;
    }
`
export const Choice = styled.section`
    display: flex;
    .rocket {
        width: 72px;
        height: 72px;
    }
`