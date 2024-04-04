import Image from "next/image";
import ProjectModal from "./ProjectModal";
import styled from "@emotion/styled";
import { color } from "@/app/styles/color";

import Slick from "@/components/Slick/Slick";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const WhiteRabbitModal = ({ visible, onClose }: Props) => {
  const images = [
    {
      id: 1,
      src: "/images/whiteRabbit/main.png",
    },
    {
      id: 2,
      src: "/images/whiteRabbit/join.png",
    },
    {
      id: 3,
      src: "/images/whiteRabbit/password.png",
    },
    {
      id: 4,
      src: "/images/whiteRabbit/mypage.png",
    },
    {
      id: 5,
      src: "/images/whiteRabbit/profileEdit.png",
    },
    {
      id: 6,
      src: "/images/whiteRabbit/skill.png",
    },
    {
      id: 7,
      src: "/images/whiteRabbit/follow.png",
    },
    {
      id: 8,
      src: "/images/whiteRabbit/post.png",
    },
    {
      id: 9,
      src: "/images/whiteRabbit/postDetail.png",
    },
    {
      id: 10,
      src: "/images/whiteRabbit/createPost.png",
    },
    {
      id: 11,
      src: "/images/whiteRabbit/admin.png",
    },
    {
      id: 11,
      src: "/images/whiteRabbit/상장.jpg",
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
              color: "#5526CC",
            }}
          >
            White Rabbit
          </div>
          <ContentWrap>
            <div className='title'>진행 기간 |</div>
            <div className='content'>2023.11.13 ~ 2023.12.01</div>
          </ContentWrap>
          <ContentWrap>
            <div className='title'>포지션 |</div>
            <div className='content'>프론트엔드</div>
          </ContentWrap>

          <div className='title'>Summary</div>
          <div className='content'>
            레이서(부트캠프 수강생)들 간의 네트워크 형성을 위한 커뮤니티를 큰
            틀로 기획하고 이를 구체화했습니다.
            <br />
            <br />
            코치님들에게 쉽게 질문할 수 있는 환경을 조성하기 위해 개발 Q&A
            파트를 구축,
            <br />
            스터디나 프로젝트를 모집하고 참여할 수 있는 기능을 갖춘 모집 파트
            구축,
            <br />
            레이서들끼리 소통하고 기술 스택이나 포트폴리오 링크를 공유할 수 있는
            마이페이지 파트를 구축하였습니다.
            <br />
            <br />
            스마트폰 사용 환경을 고려하여 UI를 모바일에 최적화하여
            제작하였습니다.
          </div>

          <div className='title'>Get</div>
          <div className='content'>
            로그인, 회원가입, 비밀번호 찾기, 마이페이지, 그리고 회원 개인의 활동
            조회와 회원정보 수정, 팔로우 관리 등 다방면을 담당했습니다. 특히
            로그인과 회원가입 과정에서의 유효성 검사 및 비밀번호 찾기 기능의
            이메일 발송 API를 접해보는 등 다양한 경험을 쌓았습니다.
            <br />
            <br />
            프로젝트를 시연할 때는 트래픽이 몰리는 상황으로 인해 서버가 다운되는
            상황도 경험했습니다. 그러나 이는 실제 서비스 운영 시 발생할 수 있는
            문제를 간접적으로 체험하는 좋은 기회였습니다.
            <br />
            <br />
            또한, 백엔드와의 소통을 통해 커뮤니케이션 스킬을 향상시키고, 상대
            포지션에 대한 이해도도 높일 수 있었습니다.
            <br /> <br />
            마음이 잘 맞는 팀원들 덕분에 우수상이라는 값진 상을 받을 수 있게
            되었습니다.
          </div>
        </div>
      </Container>
    </ProjectModal>
  );
};

export default WhiteRabbitModal;

const Container = styled.div`
  height: 90%;
  padding: 30px;
  display: flex;
  align-items: center;

  .project {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
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
