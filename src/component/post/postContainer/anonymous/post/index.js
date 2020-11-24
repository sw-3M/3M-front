import React from "react";
import { Container, Title, Image, Content } from "./style";
const Post = (data) => {
  console.log(data.data.image_urls[0]);
  return (
    <Container>
      <Title>{data.data.title}</Title>
      {data.data.image_urls[0] !== undefined && (
        <Image src={data.data.image_urls[0]} />
      )}
      <Content>{data.data.content}</Content>
    </Container>
  );
};

export default Post;
