import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;
export const Container = styled.div`
  position: fixed;
  z-index: 9999;
  width: 1000px;
  height: 600px;

  left: 300px;
  top: 50px;
  margin: auto;

  background-color: white;
  border-radius: 30px;
  border: 5px solid #cde0f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin: 15px 0;
  }
`;
export const Title = styled.input`
  border: none;
  width: 800px;
  height: 50px;
  font-size: 30px;
  margin: 20px 30px;
`;
export const Image = styled.input``;
export const Content = styled.textarea`
  resize: none;
  margin: 0 50px;
  height: 300px;
  width: 800px;
`;
export const SubmitButton = styled.button`
  width: 300px;
  height: 80px;
`;
