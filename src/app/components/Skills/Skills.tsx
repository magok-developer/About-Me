import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import Progress from "../Progress/Progress";

type Props = {
  element: () => void;
};

const Skills = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <div className='title'>Skills</div>

      <Progress />
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

  gap: 60px;

  .title {
    font-size: 32px;
    font-weight: bold;

    color: ${color.black};
  }
`;
