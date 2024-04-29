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
    <Container
      ref={element}
      frontSkillView={frontSkillView}
      etcSkillView={etcSkillView}
    >
      <div className='title'>Skills</div>
      <div
        className='skill-title-wrap'
        style={{
          display: "flex",
        }}
      >
        <div className='skill-title-front' onClick={handleClickFrontSkill}>
          Frontend
        </div>
        <div className='skill-title-etc' onClick={handleClickEtcSkill}>
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

const Container = styled.div<{
  frontSkillView: boolean;
  etcSkillView: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 60px;

  .title {
    font-weight: bold;
    color: ${color.pointBlue};
  }

  .skill-title-front {
    font-size: 16px;
    color: ${({ frontSkillView }) =>
      frontSkillView ? color.pointYellow : color.black};
    font-weight: bold;
    cursor: pointer;
  }

  .skill-title-etc {
    font-size: 16px;
    color: ${({ etcSkillView }) =>
      etcSkillView ? color.pointBlue : color.black};
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 479px) {
    height: ${({ frontSkillView }) => (frontSkillView ? "700px" : "505px")};

    .title {
      font-size: 24px;
    }

    .skill-title-wrap {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    .skill-wrap {
      display: flex;
      justify-content: center;
      transition: height 0.5s ease-in-out;
    }
  }
  @media (min-width: 480px) and (max-width: 600px) {
    height: ${({ frontSkillView }) => (frontSkillView ? "700px" : "505px")};

    .title {
      font-size: 28px;
    }

    .skill-title-wrap {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    .skill-wrap {
      display: flex;
      justify-content: center;
      transition: height 0.5s ease-in-out;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    height: ${({ frontSkillView }) => (frontSkillView ? "650px" : "455px")};

    .title {
      font-size: 30px;
    }

    .skill-title-wrap {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    .skill-wrap {
      display: flex;
      justify-content: center;
      transition: height 0.5s ease-in-out;
    }
  }

  @media (min-width: 751px) {
    height: ${({ frontSkillView }) => (frontSkillView ? "650px" : "455px")};

    .title {
      font-size: 32px;
    }

    .skill-title-wrap {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    .skill-wrap {
      display: flex;
      justify-content: center;
      transition: height 0.5s ease-in-out;
    }
  }
`;
