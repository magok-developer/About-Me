import styled from "@emotion/styled";
import { color } from "@/app/styles/color";
import { Titan_One } from "next/font/google";
import { useScrollAnimation } from "@/app/hook/useScrollAnimation";
import Image from "next/image";

type Props = {
  element: () => void;
};

const titan = Titan_One({ subsets: ["latin"], weight: ["400"] });

const Home = ({ element }: Props) => {
  const { ref, isInViewport } = useScrollAnimation(element);
  return (
    <Container ref={element}>
      <h1 className='hello'> 반갑습니다! </h1>
      <h1 className={isInViewport ? "animate" : ""} ref={ref}>
        주니어 프론트엔드 개발자 하지원 입니다.
      </h1>
      <h4>
        사용자 중심의 개발을 지향하며, 협업과 커뮤니케이션을 중요시 합니다.
      </h4>
      <Image
        src={"/images/icons/arrow-down.svg"}
        alt='arrow'
        width={30}
        height={30}
        className='arrow'
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: bold;

  background: url("images/background.png");

  color: ${color.white};
  h1.hello {
    margin-bottom: 14px;
  }

  h1.animate {
    animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid;
    margin-bottom: 20px;
  }

  .arrow {
    position: absolute;
    bottom: 30px;
    animation: bounce 0.5s cubic-bezier(0, 0, 0.18, 0.99) infinite alternate;
  }
  @media (max-width: 480px) {
    height: 540px;

    h1.hello {
      font-size: 20px;
    }

    h1.animate {
      width: 340px;
      font-size: 20px;
    }
    h4 {
      font-size: 12px;
    }
  }
  @media (min-width: 480px) and (max-width: 600px) {
    height: 560px;

    h1.hello {
      font-size: 24px;
    }

    h1.animate {
      width: 410px;
      font-size: 24px;
    }
    h4 {
      font-size: 14px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    height: 600px;

    h1.hello {
      font-size: 30px;
    }

    h1.animate {
      width: 510px;
      font-size: 30px;
    }
  }

  @media (min-width: 750px) {
    height: 690px;

    h1.animate {
      width: 540px;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes bounce {
    to {
      transform: translateY(-30px);
    }
  }
`;
