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
