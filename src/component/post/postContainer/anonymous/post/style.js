import styled from "styled-components";

export const Container = styled.div`
  margin: 15px auto;
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 995px;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const Title = styled.header`
  font-size: 30px;
  width: 700px;
  height: 50px;
  color: #7f9ecc;
`;
export const Image = styled.img`
  width: 300px;
  height: 250px;
`;
export const Content = styled.div`
  width: 450px;
  overflow-wrap: wrap;
  color: white;
  margin: 10px 0;
`;
