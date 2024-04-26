import styled from "@emotion/styled";
import { color } from "@/app/styles/color";
import { Titan_One } from "next/font/google";

type Props = {
  element: () => void;
};

const titan = Titan_One({ subsets: ["latin"], weight: ["400"] });

const Home = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <Text className={titan.className}>
        <span>J</span>
        <span>i</span>
        <span>w</span>
        <span>o</span>
        <span>n</span>
        <span>P</span>
        <span>o</span>
        <span>r</span>
        <span>t</span>
        <span>f</span>
        <span>o</span>
        <span>l</span>
        <span>i</span>
        <span>o</span>
      </Text>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 100px;
  font-weight: bold;

  background-color: ${color.pointBlue};
`;

const Text = styled.h1`
  display: flex;
  span {
    position: relative;
    top: 20px;
    display: inline-block;
    animation: bounce 0.3s ease infinite alternate;

    font-size: 80px;
    color: ${color.white};
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
      0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
  }

  span:nth-child(2) {
    animation-delay: 0.1s;
  }
  span:nth-child(3) {
    animation-delay: 0.2s;
  }
  span:nth-child(4) {
    animation-delay: 0.3s;
  }
  span:nth-child(5) {
    animation-delay: 0.4s;
  }
  span:nth-child(6) {
    animation-delay: 0.5s;
  }
  span:nth-child(7) {
    animation-delay: 0.6s;
  }
  span:nth-child(8) {
    animation-delay: 0.7s;
  }
  span:nth-child(9) {
    animation-delay: 0.8s;
  }
  span:nth-child(10) {
    animation-delay: 0.9s;
  }
  span:nth-child(11) {
    animation-delay: 1s;
  }
  span:nth-child(12) {
    animation-delay: 1.1s;
  }
  span:nth-child(13) {
    animation-delay: 1.2s;
  }
  span:nth-child(14) {
    animation-delay: 1.3s;
  }

  @keyframes bounce {
    100% {
      top: -20px;
      text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
        0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
        0 50px 25px rgba(0, 0, 0, 0.2);
    }
  }
`;
