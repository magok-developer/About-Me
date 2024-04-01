import Image from "next/image";
import ProjectModal from "./ProjectModal";
import styled from "@emotion/styled";
import { color } from "@/app/styles/color";

import ImageSwiper from "../../../../components/Swiper/Swiper";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const images = [
  {
    id: 1,
    src: "/images/todo/todo1.png",
  },
  {
    id: 2,
    src: "/images/todo/todo2.png",
  },
  {
    id: 3,
    src: "/images/todo/todo3.png",
  },
  {
    id: 4,
    src: "/images/todo/todo4.png",
  },
  {
    id: 5,
    src: "/images/todo/todo5.png",
  },
  {
    id: 6,
    src: "/images/todo/todo6.png",
  },
];

const TodoModal = ({ visible, onClose }: Props) => {
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
          <ImageSwiper images={images} onClose={onClose} />
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

              color: color.main,
            }}
          >
            Todo & Diary
          </div>
          <ContentWrap>
            <div className='title'>진행 기간 |</div>
            <div className='content'>2023.10.2 ~ 2023.10.13</div>
          </ContentWrap>
          <ContentWrap>
            <div className='title'>포지션 |</div>
            <div className='content'>디자인, 프론트엔드</div>
          </ContentWrap>

          <div className='title'>Summary</div>
          <div className='content'>
            CRUD를 가장 많이 연습 해볼 수 있는 프로젝트가 무엇일까 고민해보다가
            진행하게된 개인 프로젝트입니다.
            <br />
            Todo List와 일기를 결합하여 개발 했습니다.
            <br />
          </div>

          <div className='title'>Get</div>
          <div className='content'>
            CRUD, datePicker 라이브러리 사용 & 커스터마이징, zustand로 상태관리
            <br />
            <br />
            Todo 등록 시 날짜를 추가하여 디데이를 계산할 수 있도록 했습니다.
            <br />
            <br />
            일기 작성시 그날의 기분과 상태를 배터리 아이콘으로 표시 할 수 있게끔
            디자인, 구현 했습니다.
            <br />
            <br />
            상단의 아이콘 클릭시 Todo와 일기 화면이 전환 되게끔 구현했습니다.
          </div>
        </div>
      </Container>
    </ProjectModal>
  );
};

export default TodoModal;

const Container = styled.div`
  height: 90%;
  padding: 30px;
  display: flex;
  align-items: center;

  .project {
    width: 400px;
    height: 500px;
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
