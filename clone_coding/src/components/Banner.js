import React from "react";
import { styled } from "styled-components";

import yellow from "../images/yellow.webp";

const Banner = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <span id="title">믿을만한</span>
        <span id="title">이웃 간 중고거래</span>
        <span id="subtitle">
          동네 주민들과 가깝고 따뜻한 거래를 <br /> 지금 경험해보세요.
        </span>
      </TitleWrapper>
      <img src={yellow} />
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  height: 315px;
  background-color: #fff1aa;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  img {
    height: 315px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  #title {
    color: #212529;
    font-size: 34px;
    font-weight: 650;
  }
  #subtitle {
    color: #212529;
    padding-top: 8px;
    font-size: 18px;
    font-weight: 300;
    line-height: 140%;
  }
`;
