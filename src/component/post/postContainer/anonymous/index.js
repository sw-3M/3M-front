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
import { useLocation } from "react-router-dom";

import client from "../../../../api";
const Anonymous = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [pathName, setPathName] = useState("");
  const location = useLocation();

  useEffect(() => {
    console.log(location.state.params);
    switch (location.state.params) {
      case "/school:dsm":
        setPathName("대덕소프트웨어마이스터고등학교");
        break;
      case "/school:gsm":
        setPathName("광주소프트웨어마이스터고등학교");
        break;
      case "/school:dgsm":
        setPathName("대구소프트웨어마이스터고등학교");
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    console.log(pathName);
    client.get(urls.BAMBOO_LIST + `?school_name=${pathName}`).then((res) => {
      setData(res.data.reverse());
    });
  }, [pathName]);

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
