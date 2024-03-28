import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useState } from "react";
import ReBirthModal from "./ProjectModal/ReBirthModal";
import WhiteRabbitModal from "./ProjectModal/WhiteRabbitModal";
import AboutMeModal from "./ProjectModal/AboutMeModal";

type Props = {
  element: () => void;
};

const Project = ({ element }: Props) => {
  const [reBirthModal, setReBirthModal] = useState(false);
  const [whiteRabbitModal, setWhiteRabbitModal] = useState(false);
  const [aboutMeModal, setAboutMeModal] = useState(false);

  const handleClick = () => {
    setReBirthModal(true);
  };

  const handleClickWhiteRabbit = () => {
    setWhiteRabbitModal(true);
  };
  const handleClickAboutMe = () => {
    setAboutMeModal(true);
  };

  const handleClose = () => {
    setReBirthModal(false);
    setWhiteRabbitModal(false);
    setAboutMeModal(false);
  };
  return (
    <Container ref={element}>
      <div className='title'>Project</div>

      <Grid>
        <img src='/images/reBirth.png' className='preview' />
        <Wrap>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className='project-title' onClick={handleClick}>
              Re:Birth
            </div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </div>
          <div className='content'>
            4개월간 진행된 부트캠프에서 1차로 진행한 팀 프로젝트 입니다. <br />
            모든 팀이 쇼핑몰이라는 공통 주제를 가지고 진행 하였으며,
            <br />
            제가 속했던 2팀에서는 리싸이클 제품을 판매하는 쇼핑몰을
            제작하였습니다.
            <br />
            프로젝트는 2주간 진행 되었으며, 최종적으로 대상을 수상하였습니다.{" "}
            <br />
            <br />
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>HTML</div>
            <div className='stack'>CSS</div>
            <div className='stack'>JavaScript</div>
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
        <img src='/images/whiteRabbit/whiteRabbit.png' className='preview' />
        <Wrap>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className='project-title' onClick={handleClickWhiteRabbit}>
              White Rabbit
            </div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </div>
          <div className='content'>
            4개월간 진행된 부트캠프에서 2차로 진행한 팀 프로젝트 입니다. <br />
            제가 속했던 7팀에서는 개발자 커뮤니티인 커리어리처럼
            <br />
            부트캠프 수강생들을 위한 커뮤니티를 기획하였습니다.
            <br />
            프로젝트는 3주간 진행 되었으며, 최종적으로 우수상을 수상하였습니다.{" "}
            <br />
            <br />
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>React</div>
            <div className='stack'>JavaScript</div>
            <div className='stack'>Styled Component</div>
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
        <img src='/images/sideGo.png' className='preview' />
        <Wrap>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className='project-title'>SideGo</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </div>
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
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className='project-title' onClick={handleClickAboutMe}>
              About Me
            </div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </div>
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
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className='project-title'>진행할 프로젝트 넣기</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </div>
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
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className='project-title'>진행할 프로젝트 넣기</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </div>
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

      <ReBirthModal visible={reBirthModal} onClose={handleClose} />
      <WhiteRabbitModal visible={whiteRabbitModal} onClose={handleClose} />
      <AboutMeModal visible={aboutMeModal} onClose={handleClose} />
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
  .project-title {
    font-size: 20px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: ${color.pointBlue};
    }
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
