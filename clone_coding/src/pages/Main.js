import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import Banner from "../components/Banner";

const Main = () => {
  return (
    <Wrapper>
      <TopBar />
      <Banner />
    </Wrapper>
  );
};

export default Main;
const Wrapper = styled.div``;
