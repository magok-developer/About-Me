import ProjectModal from "./ProjectModal";
import styled from "@emotion/styled";
import { color } from "@/app/styles/color";
import Slick from "@/components/Slick/Slick";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const AboutMe = ({ visible, onClose }: Props) => {
  const images = [
    {
      id: 1,
      src: "/images/aboutMe/1.png",
    },
    {
      id: 2,
      src: "/images/aboutMe/2.png",
    },
    {
      id: 3,
      src: "/images/aboutMe/3.png",
    },
    {
      id: 4,
      src: "/images/aboutMe/4.png",
    },
  ];
  return (
    <ProjectModal
      style={{
        width: "95%",
        height: "90%",
        zIndex: 9999,
        overflow: "hidden",
        padding: 0,
      }}
      visible={visible}
      onClose={onClose}
    >
      <Container>
        <div className='project'>
          <Slick images={images} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 20,
            flex: 1,
            marginLeft: 60,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: color.pointBlue,
            }}
          >
            About Me
          </div>
          <ContentWrap>
            <div className='title'>진행 기간 |</div>
            <div className='content'>2024.03.25 ~ 2024.03.31</div>
          </ContentWrap>
          <ContentWrap>
            <div className='title'>포지션 |</div>
            <div className='content'>디자인, 프론트엔드</div>
          </ContentWrap>

          <div className='title'>Summary</div>
          <div className='content'>
            개인 포트폴리오 사이트입니다. <br />
            <br />
            Home, About Me, Skills, Project, Contact 구성으로 이루어져 있으며,
            디자인도 직접 구상하여 개발했습니다.
          </div>

          <div className='title'>Get</div>
          <div className='content'>
            스크롤을 감지하기 위해 ScrollIntoView와 Intersection Observer를
            활용하여 웹사이트에 동적인 요소를 추가했습니다.
            <br />
            Slick 라이브러리를 적용하여 프로젝트 모달창 내의 이미지를 슬라이드
            형태로 표현했습니다.
            <br />
            익숙하지 않은 라이브러리 또는 기술을 사용하는 것이 어려웠으나,
            새로운 기술을 배우고 익힐 수 있는 기회가 되어 좋았습니다.
            <br />
            <br />
            vercel을 통해 배포하는 것은 처음이었지만, 간편하고 신속한 배포
            과정을 경험할 수 있었습니다.
          </div>
        </div>
      </Container>
    </ProjectModal>
  );
};

export default AboutMe;

const Container = styled.div`
  height: 90%;
  padding: 30px;
  display: flex;
  align-items: center;

  .project {
    width: 400px;
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    color: ${color.main};
  }
  .content {
    font-size: 12px;
    color: #727272;
    line-height: 150%;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
