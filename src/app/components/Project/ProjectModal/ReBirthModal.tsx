import Image from "next/image";
import ProjectModal from "./ProjectModal";
import styled from "@emotion/styled";
import { color } from "@/app/styles/color";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const ReBirthModal = ({ visible, onClose }: Props) => {
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
        <div className='project'></div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 24,
            flex: 1,
            marginLeft: 60,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: "bold",
              background: color.black,
              color: color.white,
            }}
          >
            Re:Birth
          </div>
          <ContentWrap>
            <div className='title'>진행 기간 |</div>
            <div className='content'>2023.10.2 ~ 2023.10.13</div>
          </ContentWrap>
          <ContentWrap>
            <div className='title'>포지션 |</div>
            <div className='content'>프론트엔드</div>
          </ContentWrap>

          <div className='title'>Summary</div>
          <div className='content'>내용내용</div>

          <div className='title'>Get</div>
          <div className='content'>내용내용</div>
        </div>
      </Container>
    </ProjectModal>
  );
};

export default ReBirthModal;

const Container = styled.div`
  height: 90%;
  padding: 30px;
  display: flex;
  align-items: center;

  .project {
    width: 400px;
    height: 500px;
    background-color: white;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    color: ${color.main};
  }
  .content {
    font-size: 14px;
    color: #727272;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
