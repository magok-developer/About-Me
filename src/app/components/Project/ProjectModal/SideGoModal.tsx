import Image from "next/image";
import ProjectModal from "./ProjectModal";
import styled from "@emotion/styled";
import { color } from "@/app/styles/color";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const SideGoModal = ({ visible, onClose }: Props) => {
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
              color: "#01FF1A",
            }}
          >
            Side Go
          </div>
          <ContentWrap>
            <div className='title'>진행 기간 |</div>
            <div className='content'>2023.2 ~ 진행 중</div>
          </ContentWrap>
          <ContentWrap>
            <div className='title'>포지션 |</div>
            <div className='content'>프론트엔드</div>
          </ContentWrap>

          <div className='title'>Summary</div>
          <div className='content'>
            각 포지션, 기술 스택에 맞춰서 취준생 및 포트폴리오를 위해 공부하는
            개발자들이 사이드 프로젝트를 참여하고 수월하게 진행하게 도와줄 수
            있는 플랫폼이 필요하다는 생각에 진행하게된 프로젝트 입니다.
            <br />
            <br />
            사이드고는 사이드 프로젝트를 진행하는 개발자들이 중간에 이탈하지
            않게 보증금을 받고 지원하는 역할을 합니다.
            <br />
            <br />
            이탈한 유저는 보증금을 돌려받지 못하고 프로젝트에서 제외되게 됩니다.
            <br />
            이탈하지 않고 끝까지 남은 유저들은 보증금을 돌려받고 성공적인
            결과물을 얻게 됩니다.
          </div>

          <div className='title'>Get</div>
          <div className='content'>내용내용</div>
        </div>
      </Container>
    </ProjectModal>
  );
};

export default SideGoModal;

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

    word-break: keep-all;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
