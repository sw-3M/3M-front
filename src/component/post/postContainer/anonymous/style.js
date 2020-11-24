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
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 998;
`;

export const PostContainer = styled.div`
  width: 800px;
  height: 800px;
  position: relative;
  overflow-y: scroll;
  z-index: 999;
`;
export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 900;
`;

export const WriteButton = styled.button`
  position: fixed;
  right: 30px;
  top: 30px;
  width: 100px;
  height: 30px;
  background-color: #b8e7f4;
  z-index: 999;
`;
