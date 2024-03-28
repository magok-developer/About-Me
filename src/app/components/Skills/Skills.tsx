import { color } from "@/app/styles/color";
import styled from "@emotion/styled";

import React from "react";
import Frontend from "./Frontend";
import Etc from "./Etc";

type Props = {
  element: () => void;
};

const Skills = ({ element }: Props) => {
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
        <Frontend element={element} />
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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
