import Image from "next/image";
import ProjectModal from "./ProjectModal";
import styled from "@emotion/styled";
import { color } from "@/app/styles/color";

import Slick from "@/components/Slick/Slick";

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
    <ProjectModal visible={visible} onClose={onClose}>
      <Container>
        <div className='project'>
          <Slick images={images} />
        </div>
        <Wrap>
          <h2 className='project-title'>Todo & Diary</h2>
          <ContentWrap>
            <span className='title'>진행 기간 |</span>
            <p className='content'>2024.03.28 ~ 2024.03.31</p>
          </ContentWrap>
          <ContentWrap>
            <span className='title'>포지션 |</span>
            <p className='content'>디자인, 프론트엔드</p>
          </ContentWrap>

          <span className='title'>Summary</span>
          <p className='content'>
            CRUD를 가장 많이 연습 해볼 수 있는 프로젝트가 무엇일까 고민해보다가
            진행하게된 개인 프로젝트입니다.
            <br />
            Todo List와 일기를 결합하여 개발 했습니다.
            <br />
          </p>

          <span className='title'>Get</span>
          <p className='content'>
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
          </p>
        </Wrap>
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
    color: ${color.main};
  }
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
