import React from "react";
import { styled } from "styled-components";

import muktae from "../images/muktae.png";

const Product = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={muktae} width={220} />
      </ImageWrapper>
      <InfoWrapper>
        <span id="title">먹태깡 팔아요</span>
        <span id="price">1000원</span>
        <span id="place">경남 진주시 초전동</span>
        <span id="view">관심 11 · 채팅 45</span>
      </InfoWrapper>
    </Wrapper>
  );
};
export default Product;
const Wrapper = styled.div`
  width: 220px;
  height: 330px;
`;
const ImageWrapper = styled.div`
  img {
    border-radius: 15px;
  }
`;
const InfoWrapper = styled.div``;
