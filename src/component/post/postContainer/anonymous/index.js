import React, { useState, useEffect } from "react";
import {
  Background,
  Overlay,
  PostContainer,
  Posts,
  WriteButton,
} from "./style";

import background from "../../../../img/background.png";
import Write from "./write";
import urls from "../../../../api/urls";
import Post from "./post";

import client from "../../../../api";
const Anonymous = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    client
      .get(urls.BAMBOO_LIST + "?school_name=대덕소프트웨어마이스터고등학교")
      .then((res) => {
        setData(res.data.reverse());
      });
  }, []);

  return (
    <>
      <Background src={background} />
      <WriteButton onClick={(e) => setVisible(true)}>글쓰기</WriteButton>
      {visible && <Write setVisible={setVisible} />}
      <PostContainer>
        <Posts>
          {data.map((e, i) => {
            return <Post data={e} />;
          })}
        </Posts>
      </PostContainer>

      <Overlay />
    </>
  );
};

export default Anonymous;
