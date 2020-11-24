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
}
`

export const Section = styled.section`
    div {
        margin-left: 200px;
        font-size: 100px;
    }
`; 