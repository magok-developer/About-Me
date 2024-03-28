import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useState } from "react";
import ReBirthModal from "./ProjectModal/ReBirthModal";
import WhiteRabbitModal from "./ProjectModal/WhiteRabbitModal";
import AboutMeModal from "./ProjectModal/AboutMeModal";
import SideGoModal from "./ProjectModal/SideGoModal";
import Link from "next/link";
import TodoModal from "./ProjectModal/TodoModal";

type Props = {
  element: () => void;
};

const initialModalState = {
  reBirthModal: false,
  whiteRabbitModal: false,
  sideGoModal: false,
  aboutMeModal: false,
  todoModal: false,
};

const Project = ({ element }: Props) => {
  const [modalState, setModalState] = useState(initialModalState);

  const openModal = (modalName: string) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const closeModal = () => {
    setModalState(initialModalState);
  };

  return (
    <Container ref={element}>
      <div className='title'>Project</div>

      <Grid>
        <img src='/images/reBirth/reBirth.png' className='preview' />
        <Wrap>
          <TitleWrap onClick={() => openModal("reBirthModal")}>
            <div className='project-title'>Re:Birth</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </TitleWrap>
          <div className='content'>
            4개월간 진행된 부트캠프에서 1차로 진행한 팀 프로젝트 입니다. <br />
            프로젝트는 2주간 진행 되었으며, 최종적으로 대상을 수상하였습니다.{" "}
            <br />
            <br />
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>HTML</div>
            <div className='stack'>CSS</div>
            <div className='stack'>JavaScript</div>
          </div>
          <Link
            href='https://github.com/magok-developer/Rebirth'
            target='_blank'
            style={{ width: "24px" }}
          >
            <Image
              src='/images/contact/gitHub_active.svg'
              width={24}
              height={24}
              alt='git'
            />
          </Link>
        </Wrap>
      </Grid>

      <Grid>
        <img src='/images/whiteRabbit/whiteRabbit.png' className='preview' />
        <Wrap>
          <TitleWrap onClick={() => openModal("whiteRabbitModal")}>
            <div className='project-title'>White Rabbit</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </TitleWrap>
          <div className='content'>
            4개월간 진행된 부트캠프에서 2차로 진행한 팀 프로젝트 입니다. <br />
            프로젝트는 3주간 진행 되었으며, 최종적으로 우수상을 수상하였습니다.{" "}
            <br />
            <br />
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>React</div>
            <div className='stack'>JavaScript</div>
            <div className='stack'>Styled Component</div>
          </div>
          <Link
            href='https://github.com/magok-developer/WhiteRabbit'
            target='_blank'
            style={{ width: "24px" }}
          >
            <Image
              src='/images/contact/gitHub_active.svg'
              width={24}
              height={24}
              alt='git'
            />
          </Link>
        </Wrap>
      </Grid>

      <Grid>
        <img src='/images/sideGo.png' className='preview' />
        <Wrap>
          <TitleWrap onClick={() => openModal("sideGoModal")}>
            <div className='project-title'>SideGo</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </TitleWrap>
          <div className='content'>
            사이드 프로젝트 팀을 꾸려서 진행한 프로젝트 입니다. <br />
            포트폴리오를 위해 사이드팀을 구하는 사람들을 위한 사이트를
            제작하였습니다.
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>Next.js</div>
            <div className='stack'>TypeScript</div>
            <div className='stack'>React-query</div>
            <div className='stack'>Styled Component</div>
            <div className='stack'>Emotion</div>
          </div>
          <Image
            src='/images/contact/gitHub_active.svg'
            width={24}
            height={24}
            alt='git'
          />
        </Wrap>
      </Grid>

      <Grid>
        <img src='/images/aboutMe.png' className='preview' />
        <Wrap>
          <TitleWrap onClick={() => openModal("aboutMeModal")}>
            <div className='project-title'>About Me</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </TitleWrap>
          <div className='content'>
            포트폴리오 정리를 위해 진행한 1인 프로젝트 입니다. <br />
            프로젝트는 약 1주간 진행 되었습니다.
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>Next.js</div>
            <div className='stack'>TypeScript</div>
            <div className='stack'>Styled Component</div>
            <div className='stack'>Emotion</div>
          </div>
          <Link
            href='https://github.com/magok-developer/About-Me'
            target='_blank'
            style={{ width: "24px" }}
          >
            <Image
              src='/images/contact/gitHub_active.svg'
              width={24}
              height={24}
              alt='git'
            />
          </Link>
        </Wrap>
      </Grid>

      <Grid>
        <img src='/images/todo/todo.png' className='preview' />

        <Wrap>
          <TitleWrap onClick={() => openModal("todoModal")}>
            <div className='project-title'>Todo & Diary</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </TitleWrap>
          <div className='content'>
            Todo List와 일기장을 결합한 1인 프로젝트입니다. <br />
            프로젝트는 약 1주간 진행 되었습니다.
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>Next.js</div>
            <div className='stack'>TypeScript</div>
            <div className='stack'>Styled Component</div>
            <div className='stack'>Emotion</div>
          </div>
          <Image
            src='/images/contact/gitHub_active.svg'
            width={24}
            height={24}
            alt='git'
          />
        </Wrap>
      </Grid>

      <Grid>
        {/* <img src='/images/aboutMe.png' className='preview' /> */}
        <div
          style={{
            width: "500px",
            height: "235.97px",
            background: color.pointGray,
          }}
        />
        <Wrap>
          <TitleWrap>
            <div className='project-title'>진행할 프로젝트 넣기</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </TitleWrap>
          <div className='content'>
            포트폴리오 정리를 위해 진행한 프로젝트 입니다. <br />
            프로젝트는 약 1주간 진행 되었습니다.
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>Next.js</div>
            <div className='stack'>TypeScript</div>
            <div className='stack'>Styled Component</div>
            <div className='stack'>Emotion</div>
          </div>
          <Image
            src='/images/contact/gitHub_active.svg'
            width={24}
            height={24}
            alt='git'
          />
        </Wrap>
      </Grid>

      <ReBirthModal visible={modalState.reBirthModal} onClose={closeModal} />
      <WhiteRabbitModal
        visible={modalState.whiteRabbitModal}
        onClose={closeModal}
      />
      <AboutMeModal visible={modalState.aboutMeModal} onClose={closeModal} />
      <SideGoModal visible={modalState.sideGoModal} onClose={closeModal} />
      <TodoModal visible={modalState.todoModal} onClose={closeModal} />
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 2300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;

  .title {
    font-size: 32px;
    font-weight: bold;

    color: ${color.black};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  .preview {
    width: 500px;
    height: 100%;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    color: ${color.pointBlue};
    gap: 30px;
  }

  .project-title {
    font-size: 20px;
    font-weight: bold;
    transition: 0.3s;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .stack {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    padding: 15px;
    background-color: ${color.white};
    border-radius: 40px;
    box-sizing: border-box;

    &:hover {
      background-color: ${color.pointGray};
      color: ${color.white};

      cursor: default;
    }
  }
  .content {
    font-size: 14px;
    line-height: 150%;
  }
`;
