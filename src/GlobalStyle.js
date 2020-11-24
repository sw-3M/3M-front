import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body{
  margin:0;
  padding:0;
    @font-face {
  font-family: NanumSquareWeb;
  src: local(NanumSquareR),
       local(NanumSquare),
       url(NanumSquareR.eot?#iefix) format('embedded-opentype'),
       url(NanumSquareR.woff) format('woff'),
       url(NanumSquareR.ttf) format('truetype');
  font-style: normal;
  font-weight: normal;
}
}
`;
export default Global;
/*https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"*/
