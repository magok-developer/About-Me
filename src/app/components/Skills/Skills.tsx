import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import Progress from "../Progress/Progress";
import Frontend from "./Frontend";
import Etc from "./Etc";
import { useScrollAnimation } from "@/app/hook/useScrollAnimation";

type Props = {
  element: () => void;
};

const Skills = ({ element }: Props) => {
  const { ref, isInViewport } = useScrollAnimation(element);

  return (
    <Container ref={element}>
      <div className='title'>Skills</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <div className='skill-title'>Frontend</div>
        <div className='skill-title'>etc</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Frontend isInViewport={isInViewport} ref={ref} />
        <Etc />
      </div>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;

  .title {
    font-size: 32px;
    font-weight: bold;

    color: ${color.black};
  }
  .skill-title {
    font-size: 16px;
    font-weight: bold;
  }
`;
