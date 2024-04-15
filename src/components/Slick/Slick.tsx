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
  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <Image
        className={className}
        src={"/images/icons/arrowCircle-left.svg"}
        alt='left_arrow'
        width={20}
        height={20}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <Image
        className={className}
        src={"/images/icons/arrowCircle-right.svg"}
        alt='right_arrow'
        width={20}
        height={20}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container>
      <Slider {...settings}>
        {images.map((item, index) => (
          <img key={`${item.id}_${index}`} src={item.src} />
        ))}
      </Slider>
    </Container>
  );
};

export default Slick;

const Container = styled.div`
  width: 90%;
`;
