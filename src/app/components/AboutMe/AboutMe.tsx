import { useScrollAnimation } from "@/app/hook/useScrollAnimation";
import { color } from "@/app/styles/color";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

type Props = {
  element: () => void;
};

const AboutMe = ({ element }: Props) => {
  const { ref, isInViewport } = useScrollAnimation(element);

  return (
    <Container ref={element}>
      <div className='title'>About Me</div>

      <div style={{ display: "flex", gap: "160px" }}>
        <SubIntroWrap>
          <Image
            src='/images/icons/user.svg'
            width={30}
            height={30}
            alt='user'
          />
          <div className='content-wrap'>
            <div className='content-title'>이름</div>
            <div className='content'>하지원</div>
          </div>
        </SubIntroWrap>

        <SubIntroWrap>
          <Image
            src='/images/icons/calendar.svg'
            width={30}
            height={30}
            alt='calendar'
          />
          <div className='content-wrap'>
            <div className='content-title'>생년월일</div>
            <div className='content'>1998.12.03</div>
          </div>
        </SubIntroWrap>

        <SubIntroWrap>
          <Image
            src='/images/icons/house.svg'
            width={30}
            height={30}
            alt='house'
          />
          <div className='content-wrap'>
            <div className='content-title'>주소지</div>
            <div className='content'>서울시 강서구</div>
          </div>
        </SubIntroWrap>
      </div>
      <Grid>
        <Image
          src='/images/photo.jpg'
          width={300}
          height={340}
          alt='증명사진'
        />
        <Content>
          <h3 className={isInViewport ? "animate" : ""} ref={ref}>
            안녕하세요. 주니어 프론트엔드 개발자 하지원 입니다.
          </h3>
          <br />
          프로그래밍에 대한 새로운 기술을 배우고{" "}
          <span className={isInViewport ? "highlight" : ""} ref={ref}>
            문제 해결
          </span>
          에 흥미를 느끼며,
          <br />
          <span className={isInViewport ? "highlight" : ""} ref={ref}>
            협업과 커뮤니케이션
          </span>
          을 통해 팀원들과 함께 일하는 것을 즐깁니다.
          <br />
          <br />
          빠르게 변화하는 기술 트렌드 에 대한{" "}
          <span className={isInViewport ? "highlight" : ""} ref={ref}>
            호기심
          </span>
          을 가지고 있으며,
          <br />
          <span className={isInViewport ? "highlight" : ""} ref={ref}>
            사용자 중심
          </span>
          의 솔루션을 개발하는 것에 관심이 많습니다.
        </Content>
      </Grid>
    </Container>
  );
};

export default AboutMe;

const frameInAnimation = keyframes`
   0% {
    width: 0
  }

  100% {
    width: 100%;
  }
`;

const Container = styled.div`
  height: 630px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  .title {
    font-size: 32px;
    font-weight: bold;

    color: ${color.black};
  }

  h3.animate {
    width: 355px;
    animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid;
    font-size: 16px;
    margin-bottom: 10px;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

const SubIntroWrap = styled.div`
  display: flex;
  gap: 16px;

  .content-wrap {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .content-title {
    font-size: 20px;
    font-weight: bold;
  }

  .content {
    font-size: 16px;
  }
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 80px;

  .content {
  }
`;

const Content = styled.div`
  line-height: normal;
  font-size: 14px;
  .highlight {
    display: inline-block;
    position: relative;
  }

  .highlight:after {
    content: "";
    height: 10px;
    display: inline-block;
    background: rgba(255, 215, 23, 0.5);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    animation: ${frameInAnimation} 1s forwards;
  }
`;
