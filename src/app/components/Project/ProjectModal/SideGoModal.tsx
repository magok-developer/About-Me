import Image from "next/image";
import ProjectModal from "./ProjectModal";
import styled from "@emotion/styled";
import { color } from "@/app/styles/color";
import Slick from "@/components/Slick/Slick";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const SideGoModal = ({ visible, onClose }: Props) => {
  const images = [
    {
      id: 1,
      src: "/images/sideGo/sideGo.png",
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
            <div className='content'>2024.2 ~ 진행 중</div>
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
            이탈하지 않고 끝까지 남은 유저들은 보증금을 돌려받고 포트폴리오
            결과물을 얻게 됩니다.
          </div>

          <div className='title'>Get</div>
          <div className='content'>
            부트캠프에서 진행한 프로젝트는 개발자들끼리 기획과 디자인을 모두
            담당했었습니다. 그러나 현업에서 일하고 있는 기획자와 디자이너와 함께
            프로젝트를 진행하면서 많은 것을 배울 수 있는 좋은 기회였습니다.
            <br />
            <br />
            단기로 진행하는 프로젝트에선 다른 포지션에 대한 이해도가 낮아 질문에
            어려움이 있었으나, 장기적으로 보는 프로젝트이다보니 백엔드와의
            밀접한 소통을 통해 백엔드에 대한 이해도를 높일 수 있었습니다.
            <br />
            <br />
            Next.js, TypeScript, React Query 등 처음 사용해보는 기술 스택들을
            도입하여 개발을 진행했습니다. 처음에는 공부와 병행하느라 개발 속도가
            더딘 편이었지만, 현재는 가장 많이 사용하는 스택으로 자리잡을 정도로
            많은 학습을 진행했습니다.
            <br />
            <br />
            현재는 서비스를 실제로 배포하여 운영할 예정이며, 어드민 페이지를
            개발 중에 있습니다.
          </div>
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

    word-break: keep-all;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
