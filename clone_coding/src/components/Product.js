import React from "react";
import { styled } from "styled-components";

import muktae from "../images/muktae.png";

const Product = (props) => {
  const { products } = props;
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={muktae} width={200} />
      </ImageWrapper>
      <InfoWrapper>
        <span id="title">{products.title}</span>
        <span id="price">{products.price}</span>
        <span id="place">{products.place}</span>
        <span id="view">{products.view}</span>
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
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: -apple-system;
  #title {
    font-size: 16px;
    font-weight: normal;
    color: #212124;
    margin-bottom: 6px;
  }
  #price {
    font-size: 14px;
    font-weight: 700;
    color: #212124;
    margin-bottom: 6px;
  }
  #place {
    font-size: 12px;
    font-weight: 400;
    color: #212124;
    margin-bottom: 5px;
  }
  #view {
    font-size: 12px;
    font-weight: 400;
    color: #868e96;
  }
`;
