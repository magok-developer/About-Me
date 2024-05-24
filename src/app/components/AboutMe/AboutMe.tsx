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

      <div className='intro-wrap'>
        <Wrap>
          <img src='/images/photo.jpg' alt='증명사진' className='id-photo' />
          <Content>
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
        </Wrap>

        <Grid>
          <div className='info-wrap'>
            <SubIntroWrap>
              <Image
                src='/images/icons/user.svg'
                width={20}
                height={20}
                alt='user'
              />
              <div className='content'>하지원</div>
            </SubIntroWrap>

            <SubIntroWrap>
              <Image
                src='/images/icons/calendar.svg'
                width={20}
                height={20}
                alt='calendar'
              />
              <div className='content'>1998.12.03</div>
            </SubIntroWrap>

            <SubIntroWrap>
              <Image
                src='/images/icons/house.svg'
                width={20}
                height={20}
                alt='house'
              />
              <div className='content'>서울시 강서구</div>
            </SubIntroWrap>

            <SubIntroWrap>
              <Image
                src='/images/icons/camp.svg'
                width={20}
                height={20}
                alt='house'
              />
              <div className='content'>
                엘리스 코딩 SW 엔지니어 트랙 6기 수료
              </div>
            </SubIntroWrap>

            <SubIntroWrap>
              <Image
                src='/images/contact/notion.png'
                width={18}
                height={18}
                alt='notion'
              />
              <a
                href='https://giddy-product-b00.notion.site/1248f4226cca4b8aaf0d694951985aad'
                target='_blank'
              >
                <div className='content'>노션 이력서 보러가기 </div>
              </a>
            </SubIntroWrap>
          </div>
          <div className='skills'>
            <div className='skills-title'>Skills</div>
            <div className='skills-wrap'>
              <div className='front'>
                <div className='skill'>
                  <Image
                    src={"/images/icons/check.svg"}
                    alt='check'
                    width={30}
                    height={30}
                  />
                  <div>Front-end</div>
                </div>
                <div className='skill-wrap'>
                  <div className='skill-text'>HTML</div>
                  <div className='skill-text'>CSS</div>
                  <div className='skill-text'>JavaScript</div>
                  <div className='skill-text'>TypeScript</div>
                  <div className='skill-text'>React</div>
                  <div className='skill-text'>Next.js</div>
                  <div className='skill-text'>React-Query</div>
                  <div className='skill-text'>Zustand</div>
                  <div className='skill-text'>Styled-Components</div>
                  <div className='skill-text'>emotion</div>
                </div>
              </div>

              <div className='etc'>
                <div className='skill'>
                  <Image
                    src={"/images/icons/check.svg"}
                    alt='check'
                    width={30}
                    height={30}
                  />
                  <div>etc</div>
                </div>
                <div className='skill-wrap'>
                  <div className='skill-text'>Git</div>
                  <div className='skill-text'>Postman</div>
                  <div className='skill-text'>Swagger</div>
                  <div className='skill-text'>Figma</div>
                  <div className='skill-text'>PhotoShop</div>
                  <div className='skill-text'>Illustrator</div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
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

  .title {
    font-weight: bold;
    border-bottom: 4px solid ${color.pointBlue};
    padding-bottom: 10px;
  }

  .intro-wrap {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .info-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
  }

  @media (max-width: 479px) {
    height: 1100px;
    gap: 30px;
    .title {
      font-size: 24px;
    }
  }

  @media (min-width: 479px) and (max-width: 530px) {
    height: 1100px;
    gap: 40px;
    .title {
      font-size: 28px;
    }
  }

  @media (min-width: 530px) and (max-width: 600px) {
    height: 1100px;
    gap: 30px;
    .title {
      font-size: 28px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    height: 850px;

    gap: 60px;
    .title {
      font-size: 30px;
    }
  }

  @media (min-width: 750px) and (max-width: 1001px) {
    height: 800px;

    gap: 60px;
    .title {
      font-size: 30px;
    }
  }

  @media (min-width: 1001px) {
    height: 850px;

    gap: 40px;
    .title {
      font-size: 30px;
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
const Wrap = styled.div`
  display: flex;
  align-items: center;

  .id-photo {
    border-radius: 100%;
    border: 3px solid ${color.pointBlue};
  }

  @media (max-width: 479px) {
    flex-direction: column;
    gap: 20px;
    .id-photo {
      width: 180px;
      height: 202px;
    }
  }

  @media (min-width: 479px) and (max-width: 530px) {
    flex-direction: column;
    gap: 20px;
    .id-photo {
      width: 180px;
      height: 202px;
    }
  }

  @media (min-width: 530px) and (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    .id-photo {
      width: 200px;
      height: 224px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    gap: 60px;
    .id-photo {
      width: 200px;
      height: 224px;
    }
  }

  @media (min-width: 750px) and (max-width: 1001px) {
    gap: 80px;
    .id-photo {
      width: 220px;
      height: 246px;
    }
  }

  @media (min-width: 1001px) {
    gap: 100px;
    .id-photo {
      width: 240px;
      height: 269px;
    }
  }
`;

const SubIntroWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  .content {
    font-weight: bold;
  }

  a .content {
    &:hover {
      color: ${color.pointBlue};
    }
  }

  @media (max-width: 479px) {
    .content {
      font-size: 10px;
    }
  }

  @media (min-width: 479px) and (max-width: 530px) {
    .content {
      font-size: 10px;
    }
  }

  @media (min-width: 530px) and (max-width: 600px) {
    .content {
      font-size: 12px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    .content {
      font-size: 12px;
    }
  }

  @media (min-width: 750px) and (max-width: 1001px) {
    .content {
      font-size: 12px;
    }
  }

  @media (min-width: 1001px) {
    .content {
      font-size: 14px;
    }
  }
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .skills-title {
    font-weight: bold;
    font-size: 20px;
  }
  .skills {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .skills-wrap {
    display: flex;
    gap: 30px;
  }
  .skill {
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: bold;
  }
  .front,
  .etc {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .skill-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .skill-text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 12px;
    background-color: ${color.white};
    border-radius: 4px;
    &:hover {
      background-color: ${color.pointYellow};
    }
  }

  @media (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .front,
    .etc {
      width: 200px;
    }
    .skill {
      font-size: 10px;
    }
  }

  @media (min-width: 479px) and (max-width: 530px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .front,
    .etc {
      width: 200px;
    }
    .skill {
      font-size: 10px;
    }
  }

  @media (min-width: 530px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .front,
    .etc {
      width: 200px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    gap: 40px;
    .front,
    .etc {
      width: 180px;
    }
  }

  @media (min-width: 750px) and (max-width: 1001px) {
    gap: 80px;
    .front,
    .etc {
      width: 230px;
    }
  }

  @media (min-width: 1001px) {
    gap: 80px;
    .front,
    .etc {
      width: 300px;
    }
  }
`;

const Content = styled.div`
  line-height: normal;

  @media (max-width: 479px) {
    font-size: 11px;
  }
  @media (min-width: 479px) and (max-width: 600px) {
    font-size: 12px;
  }

  @media (min-width: 601px) and (max-width: 750px) {
    font-size: 12px;
  }

  @media (min-width: 750px) and (max-width: 1001px) {
    font-size: 14px;
  }

  @media (min-width: 1001px) {
    font-size: 16px;
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
