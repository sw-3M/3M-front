import styled from "styled-components";

export const Background = styled.img`
  width: 100vw;
  height: 100vh;

  position: absolute;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 998;
`;

export const PostContainer = styled.div`
  width: 1000px;
  height: 800px;
  position: relative;
  overflow-y: scroll;
  z-index: 999;
`;
export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 2000;
`;
