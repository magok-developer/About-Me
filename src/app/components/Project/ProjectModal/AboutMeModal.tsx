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
      src: "/images/reBirth/1.jpg",
    },
    {
      id: 2,
      src: "/images/reBirth/2.jpg",
    },
    {
      id: 3,
      src: "/images/reBirth/3.jpg",
    },
    {
      id: 4,
      src: "/images/reBirth/4.jpg",
    },
    {
      id: 5,
      src: "/images/reBirth/상장.jpg",
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
          <div className='content'>뚱땅뚱땅</div>

          <div className='title'>Get</div>
          <div className='content'>으쌰으쌰</div>
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
