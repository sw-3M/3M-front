import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 999;
  width: 1000px;
  height: 600px;

  top: 100px;
  margin: auto;

  background-color: white;
  border-radius: 30px;
  border: 5px solid #cde0f5;
  display: flex;
  flex-direction: column;
  align-items: center;
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
