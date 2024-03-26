import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

type Props = {
  element: () => void;
};

const Project = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <div className='title'>Project</div>

      <Grid>
        <img src='/images/whiteRabbit.png' className='preview' />
        <Wrap>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontSize: 20, fontWeight: "bold" }}>White Rabbit</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </div>
          <div className='content'>
            4개월간 수료한 부트캠프에서 2차로 진행한 팀 프로젝트 입니다. <br />
            개발자 커뮤니티인 커리어리처럼 부트캠프 수강생들을 위한 커뮤니티를
            기획하였습니다.
            <br />
            프로젝트는 3주간 진행 되었으며, 최종적으로 우수상을 수상하였습니다.{" "}
            <br />
            <br />
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>React</div>
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
        <img src='/images/sideGo.png' className='preview' />
        <Wrap>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontSize: 20, fontWeight: "bold" }}>SideGo</div>
            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='git'
            />
          </div>
          <div className='content'>
            4개월간 수료한 부트캠프에서 2차로 진행한 팀 프로젝트 입니다. <br />
            개발자 커뮤니티인 커리어리처럼 부트캠프 수강생들을 위한 커뮤니티를
            기획하였습니다.
            <br />
            프로젝트는 3주간 진행 되었으며, 최종적으로 우수상을 수상하였습니다.{" "}
            <br />
            <br />
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div className='stack'>React</div>
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
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 160px;

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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .stack {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    padding: 20px;
    background-color: ${color.white};
    border-radius: 40px;
    box-sizing: border-box;
  }
  .content {
    font-size: 14px;
    line-height: 150%;
  }
`;
