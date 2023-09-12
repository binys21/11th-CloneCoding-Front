import React from "react";
import { styled } from "styled-components";

import carrot from "../images/carrot.png";

const Item = () => {
\
  return (
    <Wrapper>
      <ItemImg src={carrot} />
      <ItemInfo>
        <span id="title">먹태깡</span>
        <span id="price">1000원</span>
        <span id="place">경남 진주시 초전동</span>
        <span id="view">관심 12 · 채팅 45</span>
      </ItemInfo>
    </Wrapper>
  );
};

export default Item;

const Wrapper=styled.div`
`;
const ItemImg=styled.div`
`;
const ItemInfo=styled.div`
`;