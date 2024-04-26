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

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <div className='info-wrap'>
          <SubIntroWrap>
            <Image
              src='/images/icons/user.svg'
              width={20}
              height={20}
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
              width={20}
              height={20}
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
              width={20}
              height={20}
              alt='house'
            />
            <div className='content-wrap'>
              <div className='content-title'>주소지</div>
              <div className='content'>서울시 강서구</div>
            </div>
          </SubIntroWrap>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className='info-wrap'
        >
          <SubIntroWrap>
            <Image
              src='/images/icons/camp.svg'
              width={20}
              height={20}
              alt='house'
            />
            <div className='content-wrap'>
              <div className='content-title'>부트캠프</div>
              <div className='content'>
                엘리스 코딩 SW 엔지니어 트랙 6기 수료
              </div>
            </div>
          </SubIntroWrap>

          <SubIntroWrap>
            <Image
              src='/images/contact/notion.png'
              width={18}
              height={18}
              alt='notion'
            />
            <div className='content-wrap'>
              <div className='content-title'>이력서</div>
              <a
                href='https://giddy-product-b00.notion.site/1248f4226cca4b8aaf0d694951985aad?pvs=74'
                target='_blank'
              >
                <div className='content'>노션 이력서 바로가기 </div>
              </a>
            </div>
          </SubIntroWrap>
        </div>
      </div>

      <Grid>
        <img src='/images/photo.jpg' alt='증명사진' className='id-photo' />

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
          을 통해 팀원들과 함께 일하는 것을 좋아합니다.
          <br />
          <br />
          빠르게 변화하는 기술 트렌드에 대한{" "}
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  .title {
    font-size: 32px;
    font-weight: bold;

    color: ${color.black};
  }

  @media (max-width: 479px) {
    height: 650px;
    gap: 30px;
    .title {
      font-size: 24px;
    }
    .info-wrap {
      display: flex;
      justify-content: center;
      gap: 40px;
    }
    h3.animate {
      width: 265px;
      animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid;
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
  @media (min-width: 480px) and (max-width: 600px) {
    height: 600px;
    gap: 40px;
    .title {
      font-size: 28px;
    }

    .info-wrap {
      display: flex;
      gap: 80px;
    }

    h3.animate {
      width: 265px;
      animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid;
      font-size: 12px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    height: 700px;
    gap: 60px;
    .title {
      font-size: 30px;
    }
    .info-wrap {
      display: flex;
      gap: 100px;
    }

    h3.animate {
      width: 310px;
      animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid;
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 751px) {
    height: 800px;
    gap: 80px;
    .title {
      font-size: 32px;
    }

    .info-wrap {
      display: flex;
      gap: 160px;
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
  gap: 12px;

  a .content {
    &:hover {
      color: ${color.pointBlue};
    }
  }

  @media (max-width: 479px) {
    .content-wrap {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .content-title {
      font-size: 12px;
      font-weight: bold;
    }
    .content {
      font-size: 10px;
    }
  }
  @media (min-width: 480px) and (max-width: 600px) {
    .content-wrap {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .content-title {
      font-size: 14px;
      font-weight: bold;
    }
    .content {
      font-size: 12px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    .content-wrap {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .content-title {
      font-size: 16px;
      font-weight: bold;
    }
    .content {
      font-size: 12px;
    }
  }

  @media (min-width: 751px) {
    .content-wrap {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .content-title {
      font-size: 20px;
      font-weight: bold;
    }
    .content {
      font-size: 14px;
    }
  }
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 80px;

  @media (max-width: 479px) {
    flex-direction: column;
    gap: 30px;
    .id-photo {
      width: 200px;
      height: 224px;
    }
  }
  @media (min-width: 480px) and (max-width: 600px) {
    gap: 20px;
    .id-photo {
      width: 200px;
      height: 224px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    gap: 20px;
    .id-photo {
      width: 240px;
      height: 269px;
    }
  }

  @media (min-width: 751px) {
    gap: 80px;
    .id-photo {
      width: 300px;
      height: 336px;
    }
  }
`;

const Content = styled.div`
  line-height: normal;

  @media (max-width: 479px) {
    font-size: 11px;
  }
  @media (min-width: 480px) and (max-width: 600px) {
    font-size: 11px;
  }

  @media (min-width: 601px) and (max-width: 750px) {
    font-size: 12px;
  }

  @media (min-width: 751px) {
    font-size: 14px;
  }

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
