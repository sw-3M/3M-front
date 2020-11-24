import React, { setState, useState } from "react";
import {
  Container,
  Content,
  Title,
  Image,
  SubmitButton,
  Overlay,
} from "./style";
import client from "../../../../../api";
import urls from "../../../../../api/urls";
const Write = ({ setVisible }) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [file, setFIle] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("content", content);
    data.append("image", file);
    client
      .post(
        urls.BAMBOOWRITE + "?school_name=대덕소프트웨어마이스터고등학굔",
        data
      )
      .then(alert("글을 성공적으로 게시하였습니다"))
      .catch(alert("오류"));
  };
  return (
    <>
      <Overlay onClick={(e) => setVisible(false)} />
      <Container>
        <Title
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Content
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Image
          type="file"
          accept="image/*"
          files={file}
          onChange={(e) => setFIle(e.target.files[0])}
        />
        <SubmitButton type="submit" onClick={onSubmit}>
          글 올리기
        </SubmitButton>
      </Container>
    </>
  );
};

export default Write;
