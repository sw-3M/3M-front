import React, { useState, useEffect } from "react";
import { Background, Overlay, PostContainer, Posts } from "./style";
import background from "../../../../img/background.png";
import Write from "./write";
import clinet from "../../../../api";
import urls from "../../../../api/urls";
import Post from "./post";
import client from "../../../../api";
const Anonymous = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    client
      .get(
        "/api/bamboo/post/all" + "?school_name=대덕소프트웨어마이스터고등학교"
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <>
      <Background src={background} />
      {/* <Write /> */}
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
