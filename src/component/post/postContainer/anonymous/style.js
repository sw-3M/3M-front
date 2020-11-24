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
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 998;
`;

export const PostContainer = styled.div`
  top: 30px;
  width: 800px;
  height: 700px;
  position: relative;
  overflow-y: scroll;
  z-index: 999;
  margin: auto;
`;
export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 900;
`;

export const WriteButton = styled.button`
  border: none;
  border-radius: 20px;
  color: white;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 30px;
  top: 30px;
  width: 150px;
  height: 60px;
  background-color: #0e7be0;

  font-size: 20px;
  font-weight: 700;
  z-index: 999;
`;
