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
import MyHomeModal from "./ProjectModal/MyHomeModal";

type Props = {
  element: () => void;
};

const initialModalState = {
  reBirthModal: false,
  whiteRabbitModal: false,
  sideGoModal: false,
  aboutMeModal: false,
  todoModal: false,
  myHomeModal: false,
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

  const handleTitleClick = (modalName: string) => {
    if (window.innerWidth <= 750) {
      switch (modalName) {
        case "reBirthModal":
          window.open(
            "https://giddy-product-b00.notion.site/Re-Birth-0cfd02c7f289451b98566a6185713123",
            "_blank"
          );
          break;
        case "whiteRabbitModal":
          window.open(
            "https://giddy-product-b00.notion.site/White-Rabbit-2eeb9afd2ccc47928b56f660bfbe6102",
            "_blank"
          );
          break;
        case "sideGoModal":
          window.open(
            "https://giddy-product-b00.notion.site/SideGo-b2c6d92e06cb4ed5a67145156f35cb03",
            "_blank"
          );
          break;
        case "aboutMeModal":
          window.open(
            "https://giddy-product-b00.notion.site/About-Me-13f94b3a6032445592c72026d57869c6",
            "_blank"
          );
          break;
        case "todoModal":
          window.open(
            "https://giddy-product-b00.notion.site/Todo-Diary-0bb779e056794c63b43e5c5374ecb3b4",
            "_blank"
          );
          break;
        case "myHomeModal":
          window.open(
            "https://giddy-product-b00.notion.site/My-Home-1afaef8d6633474da6f584cd70e74d93",
            "_blank"
          );
          break;
        default:
          break;
      }
    } else {
      openModal(modalName);
    }
  };

  return (
    <Container ref={element}>
      <div className='main-title'>Project</div>

      <Grid>
        <img src='/images/reBirth/reBirth.png' className='preview' />
        <Wrap>
          <TitleWrap onClick={() => handleTitleClick("reBirthModal")}>
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
          <TitleWrap onClick={() => handleTitleClick("whiteRabbitModal")}>
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
        <img src='/images/sideGo/sideGo.png' className='preview' />
        <Wrap>
          <TitleWrap onClick={() => handleTitleClick("sideGoModal")}>
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
            <div className='stack'>Zustand</div>
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
        <img src='/images/aboutMe/aboutMe.png' className='preview' />
        <Wrap>
          <TitleWrap onClick={() => handleTitleClick("aboutMeModal")}>
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
          <TitleWrap onClick={() => handleTitleClick("todoModal")}>
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
            <div className='stack'>Emotion</div>
            <div className='stack'>Zustand</div>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <Link
              href='https://github.com/magok-developer/Todo-project'
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
            <Link
              href='https://todo-project-puce.vercel.app/'
              target='_blank'
              style={{ width: "24px" }}
            >
              <Image
                src='/images/icons/link.svg'
                width={24}
                height={24}
                alt='git'
              />
            </Link>
          </div>
        </Wrap>
      </Grid>

      <Grid>
        <img src='/images/myHome/myHome.png' className='preview' />

        <Wrap>
          <TitleWrap onClick={() => handleTitleClick("myHomeModal")}>
            <div className='project-title'>My Home</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </TitleWrap>
          <div className='content'>
            공공 API를 이용해서 진행된 1인 프로젝트입니다.
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>Next.js</div>
            <div className='stack'>TypeScript</div>
            <div className='stack'>React-Query</div>
            <div className='stack'>Emotion</div>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <Link
              href='https://github.com/magok-developer/myHome-project'
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
            <Link
              href='https://my-home-project.vercel.app/'
              target='_blank'
              style={{ width: "24px" }}
            >
              <Image
                src='/images/icons/link.svg'
                width={24}
                height={24}
                alt='git'
              />
            </Link>
          </div>
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
      <MyHomeModal visible={modalState.myHomeModal} onClose={closeModal} />
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main-title {
    font-weight: bold;
    border-bottom: 4px solid ${color.pointBlue};
    padding-bottom: 10px;
  }

  @media (max-width: 480px) {
    height: 2600px;
    gap: 60px;
    .main-title {
      font-size: 24px;
    }
  }
  @media (min-width: 480px) and (max-width: 500px) {
    height: 2700px;
    gap: 60px;
    .main-title {
      font-size: 24px;
    }
  }

  @media (min-width: 501px) and (max-width: 550px) {
    height: 2800px;
    gap: 60px;
    .main-title {
      font-size: 24px;
    }
  }

  @media (min-width: 551px) and (max-width: 600px) {
    height: 3000px;
    gap: 60px;
    .main-title {
      font-size: 24px;
    }
  }

  @media (min-width: 601px) and (max-width: 650px) {
    height: 3200px;
    gap: 60px;
    .main-title {
      font-size: 30px;
    }
  }

  @media (min-width: 651px) and (max-width: 750px) {
    height: 3400px;
    gap: 60px;
    .main-title {
      font-size: 30px;
    }
  }

  @media (min-width: 751px) {
    height: 2300px;
    gap: 100px;
    .main-title {
      font-size: 32px;
      margin-top: 40px;
    }
  }
`;

const Grid = styled.div`
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .preview {
      width: 90%;
      height: 100%;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  @media (min-width: 751px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 650px;
    gap: 40px;

    .preview {
      width: 500px;
      height: 100%;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  cursor: pointer;

  transition: 0.3s;

  .project-title {
    font-weight: bold;
  }

  @media (max-width: 750px) {
    .project-title {
      font-size: 16px;
    }
  }

  @media (min-width: 751px) {
    .project-title {
      font-size: 20px;
    }

    &:hover {
      color: ${color.pointBlue};
      gap: 30px;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .stack {
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
    line-height: 150%;
  }

  @media (max-width: 750px) {
    width: 90%;
    .content {
      font-size: 12px;
      margin-top: 2px;
      height: 54px;
    }
    .stack {
      margin-bottom: 20px;
      font-size: 8px;
    }
  }

  @media (min-width: 751px) {
    .content {
      font-size: 14px;
    }
    .stack {
      font-size: 12px;
    }
  }
`;
