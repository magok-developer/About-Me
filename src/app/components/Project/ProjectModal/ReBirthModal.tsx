import Image from "next/image";
import ProjectModal from "./ProjectModal";
import styled from "@emotion/styled";
import { color } from "@/app/styles/color";

import Slick from "@/components/Slick/Slick";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const ReBirthModal = ({ visible, onClose }: Props) => {
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
    <ProjectModal visible={visible} onClose={onClose}>
      <Container>
        <div className='project'>
          <Slick images={images} />
        </div>
        <Wrap>
          <h2 className='project-title'>Re:Birth</h2>
          <ContentWrap>
            <p className='title'>진행 기간 |</p>
            <span className='content'>2023.10.2 ~ 2023.10.13</span>
          </ContentWrap>
          <ContentWrap>
            <p className='title'>포지션 |</p>
            <p className='content'>프론트엔드</p>
          </ContentWrap>

          <p className='title'>Summary</p>
          <span className='content'>
            개발 공부를 본격적으로 시작한 뒤 진행 된 첫 팀 프로젝트 였습니다.
            <br />
            모든 팀이 쇼핑몰이라는 공통 주제를 가지고 진행 하였으며, 제가 속했던
            2팀에서는 업사이클링 제품을 판매하는 쇼핑몰을 제작하였습니다.
            <br />
          </span>

          <p className='title'>Get</p>
          <span className='content'>
            부트캠프에서 제시한 필수 구현 기능 중 저는 장바구니와 비회원, 회원
            주문 조회를 담당했습니다.
            <br />
            장바구니는 백엔드가 아닌 프론트엔드에서 관리해야 했기에, 관련
            데이터를 localStorage를 활용하여 유저가 장바구니에 추가한 상품을
            관리했습니다.
            <br />
            <br />
            이 프로젝트를 통해 git을 처음 사용해보며 버전 관리의 중요성을
            깨달았습니다.
            <br />
            <br />
            구현하는 과정에서 바닐라 자바스크립트를 사용했는데, innerHTML을
            사용하는 빈도가 많았고 코치님께서 innerHTML은
            XSS(Cross-Site-Scripting) 공격에 취약하며, 악의적인 스크립트가
            실행될 가능성이 있고, 대량의 데이터를 처리할 때 성능이 저하된다며
            사용을 지양해야하는 이유을 알려주셨고 좋은 공부가 되었습니다.
            <br />
            <br />
            많이 부족하던 저를 잘 이끌어주던 팀원들 덕분에 대상이라는 값진 상을
            받을 수 있게 되었습니다.
          </span>
        </Wrap>
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
    font-weight: bold;
    background-color: ${color.black};
    color: ${color.white};
  }
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
