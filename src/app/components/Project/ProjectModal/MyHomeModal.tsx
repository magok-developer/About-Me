import Image from "next/image";
import ProjectModal from "./ProjectModal";
import styled from "@emotion/styled";
import { color } from "@/app/styles/color";
import Slick from "@/components/Slick/Slick";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const MyHomeModal = ({ visible, onClose }: Props) => {
  const images = [
    {
      id: 1,
      src: "/images/myHome/main.png",
    },
    {
      id: 2,
      src: "/images/myHome/apt.png",
    },
    {
      id: 3,
      src: "/images/myHome/leftover.png",
    },
    {
      id: 4,
      src: "/images/myHome/etc.png",
    },
    {
      id: 5,
      src: "/images/myHome/public.png",
    },
    {
      id: 6,
      src: "/images/myHome/aptDetail.png",
    },
    {
      id: 7,
      src: "/images/myHome/leftoverDetail.png",
    },
  ];
  return (
    <ProjectModal visible={visible} onClose={onClose}>
      <Container>
        <div className='project'>
          <Slick images={images} />
        </div>
        <Wrap>
          <h2 className='project-title'>My Home</h2>
          <ContentWrap>
            <p className='title'>진행 기간 |</p>
            <span className='content'>2024.4 ~ 진행 중</span>
          </ContentWrap>
          <ContentWrap>
            <p className='title'>포지션 |</p>
            <span className='content'>디자인, 프론트엔드</span>
          </ContentWrap>

          <p className='title'>Summary</p>
          <span className='content'>
            공공 데이터 포털의 청약 홈 API를 활용한 프로젝트를 진행했습니다.
            <br />
            <br />
            사용자는 지역, 주택 구분 등의 필터링을 통해 청약 건물 리스트를
            확인할 수 있습니다.
          </span>
          <p className='title'>Get</p>
          <span className='content'>
            프로젝트를 시작할 때 API Key를 발급 받는 과정부터 CORS 에러를
            해결하는 데 어려움을 겪었지만 직접 해결하면서 많은 것을 배웠습니다.
            <br />
            <br />
            useInfiniteQuery를 이용해서 무한 스크롤을 구현했으며,
            <br />
            사용자의 편의를 위해 Kakao Map API를 사용하여 청약 건물의 지도를
            제공했습니다.
            <br />
            <br />
            공공 API의 특성상 원하는 데이터로 필터링 하기가 쉽지 않아서 많은
            고민을 했고, 백엔드 개발자와 하는 협업의 소중함을 느낄 수
            있었습니다.
            <br />
            <br />
            현재는 각 API를 주택 구분 코드로 소팅하여 경쟁률 데이터를 가져올 수
            있도록 개발 중에 있습니다.
          </span>
        </Wrap>
      </Container>
    </ProjectModal>
  );
};

export default MyHomeModal;

const Container = styled.div`
  height: 90%;
  padding: 30px;
  display: flex;
  align-items: center;

  .project {
    width: 500px;
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

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  margin-left: 60px;

  .project-title {
    color: #2bae66;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
