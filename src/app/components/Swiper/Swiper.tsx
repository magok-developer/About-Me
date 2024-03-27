import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

type Image = {
  id: number;
  src: string;
};

type SliderProps = {
  images: Image[];
};

const Slider = ({ images }: SliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <Container>
      <div onClick={prevSlide} className='left-button'>
        <Image
          src='/images/icons/arrowCircle-left.svg'
          width={30}
          height={30}
          alt='arrow'
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={images[currentImageIndex].src}
          alt={`Slide ${images[currentImageIndex].id}`}
          style={{ width: "auto", height: "500px" }}
        />
      </div>
      <div onClick={nextSlide} className='right-button'>
        <Image
          src='/images/icons/arrowCircle-right.svg'
          width={30}
          height={30}
          alt='arrow'
        />
      </div>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  position: relative;

  .left-button,
  .right-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .left-button {
    left: 0;
  }

  .right-button {
    right: 0;
  }
`;
