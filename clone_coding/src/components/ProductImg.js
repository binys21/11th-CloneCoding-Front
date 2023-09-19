import React, { useState } from "react";
import { styled } from "styled-components";
//image
import back from "../images/back.png";
import next from "../images/next.png";

const ProductImg = ({ id, image }) => {
  const [imgCount, setImgCount] = useState(0);

  const nextImg = () => {
    if (imgCount < imagelength - 1) {
      setImgCount(imgCount + 1);
    }
  };
  const preImg = () => {
    if (imgCount > 0) {
      setImgCount(imgCount - 1);
    }
  };

  return (
    <Wrapper>
      <PteBtn onClick={preImg}>
        <img src={back} />
      </PteBtn>

      <ImageSlider>
        <Image src={image[imgCount]} alt={`Image ${imgCount}`} />
      </ImageSlider>

      <NextBtn onClick={nextImg}>
        <img src={next} />
      </NextBtn>
    </Wrapper>
  );
};

export default ProductImg;
