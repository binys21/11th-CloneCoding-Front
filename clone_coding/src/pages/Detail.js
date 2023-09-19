import React from "react";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
//data
import { pdCover } from "../mock/productData";
//image
import profile from "../images/profile.png";
//component
import TopBar from "../components/TopBar";

const Detail = () => {
  const location = useLocation(); //useLocation으로 product 상태 정보 가져옴
  const productData = location.state.productData;

  return (
    <Wrapper>
      <TopBar />
      <ProductImg>
        <img
          src={pdCover[productData.id - 1]}
          width={200}
          alt={`Product ${productData.id}`}
        />
      </ProductImg>

      <UserInfo>
        <img src={profile} width={30} />
        <div>
          <span id="username">{productData.username}</span>
          <span id="place">{productData.place}</span>
        </div>
        <TempBox>
          <span>{productData.temp} °C</span>
          <TempBar>
            <div
              style={{
                width: `${productData.temp}%`,
              }}
            />
          </TempBar>
          <span>매너온도</span>
        </TempBox>
      </UserInfo>

      <Content>
        <span>{productData.title}</span>
        <span>
          {productData.category} · {productData.when}
        </span>
        <span>{productData.price}원</span>
        <div>{productData.info}</div>
        <span>
          {productData.like} {productData.view}
        </span>
      </Content>
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div``;
const Content = styled.div``;
const ProductImg = styled.div``;
const UserInfo = styled.div``;
const TempBox = styled.div``;
const TempBar = styled.div``;
