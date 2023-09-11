import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";

const DetailPage = () => {
  return (
    <Wrapper>
      <TopBar />

      <Content></Content>
    </Wrapper>
  );
};

export default Detail;
const Wrapper = styled.div``;
const Content = styled.div``;
