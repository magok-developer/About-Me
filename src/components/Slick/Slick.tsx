import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import Image from "next/image";

type Image = {
  id: number;
  src: string;
};
type SlickProps = {
  images: Image[];
};

const Slick = ({ images }: SlickProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <Image
        src='/images/icons/arrowCircle-left.svg'
        width={30}
        height={30}
        alt='arrow'
      />
    ),
    nextArrow: (
      <Image
        src='/images/icons/arrowCircle-right.svg'
        width={30}
        height={30}
        alt='arrow'
      />
    ),
  };
  return (
    <Container>
      <Slider {...settings}>
        {images.map((item) => (
          <img src={item.src} />
        ))}
      </Slider>
    </Container>
  );
};

export default Slick;

const Container = styled.div`
  width: 90%;
`;
