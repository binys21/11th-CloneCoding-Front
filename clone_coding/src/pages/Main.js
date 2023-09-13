import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import Product from "../components/Product";
import Banner from "../components/Banner";

const Main = () => {
  return (
    <Wrapper>
      <TopBar />
      <Banner />
      <TextWrapper>중고거래 인기매물</TextWrapper>
      <ProductWrapper>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductWrapper>
    </Wrapper>
  );
};

export default Main;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const TextWrapper = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 34px;
  font-weight: 600;
  color: #212529;
`;
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 45px;
`;
