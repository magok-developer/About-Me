import { color } from "@/app/styles/color";
import styled from "@emotion/styled";

import { useState } from "react";
import Frontend from "./components/Frontend";
import Etc from "./components/Etc";

type Props = {
  element: () => void;
};

const Skills = ({ element }: Props) => {
  const [frontSkillView, setFrontSkillView] = useState(false);
  const [etcSkillView, setEtcSkillView] = useState(false);

  const handleClickFrontSkill = () => {
    if (!frontSkillView) {
      setFrontSkillView(true);
      setEtcSkillView(false);
    } else {
      setFrontSkillView(false);
    }
  };

  const handleClickEtcSkill = () => {
    if (!etcSkillView) {
      setEtcSkillView(true);
      setFrontSkillView(false);
    } else {
      setEtcSkillView(false);
    }
  };

  return (
    <Container ref={element} frontSkillView={frontSkillView}>
      <div className='title'>Skills</div>
      <div
        className='skill-title-wrap'
        style={{
          display: "flex",
        }}
      >
        <div className='skill-title' onClick={handleClickFrontSkill}>
          Frontend
        </div>
        <div className='skill-title' onClick={handleClickEtcSkill}>
          etc
        </div>
      </div>
      <div
        className='skill-wrap'
        style={{ height: frontSkillView || etcSkillView ? "auto" : "0" }}
      >
        <Frontend frontSkillView={frontSkillView} />
        <Etc etcSkillView={etcSkillView} />
      </div>
    </Container>
  );
};

export default Skills;

const Container = styled.div<{ frontSkillView: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 60px;

  .title {
    font-weight: bold;

    color: ${color.black};
  }

  @media (max-width: 479px) {
    height: ${({ frontSkillView }) => (frontSkillView ? "700px" : "505px")};

    .title {
      font-size: 24px;
      color: ${color.pointBlue};
    }

    .skill-title-wrap {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    .skill-wrap {
      display: flex;
      /* flex-direction: column; */
      justify-content: center;
      transition: height 0.5s ease-in-out;
      /* overflow: hidden; */
    }
  }
  @media (min-width: 480px) and (max-width: 600px) {
    height: 550px;

    .title {
      font-size: 28px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    height: 600px;

    .title {
      font-size: 30px;
    }
  }

  @media (min-width: 751px) {
    .title {
      font-size: 32px;
    }
  }

  .skill-title {
    font-size: 16px;
    font-weight: bold;
  }
`;
