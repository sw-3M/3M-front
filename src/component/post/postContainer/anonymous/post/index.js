import React from "react";
import { Container, Title, Image, Content } from "./style";

const Post = ({ data }) => {
  console.log(data.image_urls[0]);
  return (
    <Container>
      <Title>{data.title}</Title>
      {data.image_urls[0] !== undefined && <Image src={data.image_urls[0]} />}
      <Content>{data.content}</Content>
    </Container>
  );
};

export default Post;
